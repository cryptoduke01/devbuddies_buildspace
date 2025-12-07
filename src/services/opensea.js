// OpenSea API Service for The Regenverse Collection
// Collection: https://opensea.io/collection/theregenverse
// API Docs: https://docs.opensea.io/reference

const OPENSEA_API_KEY = import.meta.env.VITE_OPENSEA_API_KEY;
const COLLECTION_SLUG = 'theregenverse';
const BASE_URL = 'https://api.opensea.io/api/v2';

// Headers for API requests (using x-api-key header as per OpenSea docs)
const getHeaders = () => ({
  'accept': 'application/json',
  'x-api-key': OPENSEA_API_KEY || '',
});

// Log API status on load (for debugging)
if (typeof window !== 'undefined') {
  console.log('OpenSea API Status:', OPENSEA_API_KEY ? '✅ API Key configured' : '❌ No API key found');
}

/**
 * Fetch collection stats (floor price, total volume, etc.)
 */
export const fetchCollectionStats = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/collections/${COLLECTION_SLUG}/stats`,
      { headers: getHeaders() }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching collection stats:', error);
    return null;
  }
};

/**
 * Fetch collection info (name, description, image, etc.)
 */
export const fetchCollectionInfo = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/collections/${COLLECTION_SLUG}`,
      { headers: getHeaders() }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching collection info:', error);
    return null;
  }
};

/**
 * Fetch NFTs from the collection
 * @param {number} limit - Number of NFTs to fetch (max 50)
 * @param {string} next - Cursor for pagination
 */
export const fetchCollectionNFTs = async (limit = 50, next = null) => {
  try {
    let url = `${BASE_URL}/collection/${COLLECTION_SLUG}/nfts?limit=${limit}`;
    if (next) {
      url += `&next=${next}`;
    }
    
    const response = await fetch(url, { headers: getHeaders() });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    return null;
  }
};

/**
 * Fetch ALL NFTs from the collection using pagination
 * @param {number} maxItems - Maximum NFTs to fetch (default 100)
 */
export const fetchAllCollectionNFTs = async (maxItems = 100) => {
  try {
    let allNfts = [];
    let nextCursor = null;
    
    while (allNfts.length < maxItems) {
      const data = await fetchCollectionNFTs(50, nextCursor);
      
      if (!data || !data.nfts || data.nfts.length === 0) {
        break;
      }
      
      allNfts = [...allNfts, ...data.nfts];
      nextCursor = data.next;
      
      // Stop if no more pages
      if (!nextCursor) {
        break;
      }
    }
    
    return { nfts: allNfts.slice(0, maxItems) };
  } catch (error) {
    console.error('Error fetching all NFTs:', error);
    return null;
  }
};

/**
 * Fetch a single NFT by token ID
 * @param {string} tokenId - The token ID of the NFT
 */
export const fetchSingleNFT = async (tokenId) => {
  try {
    // The Regenverse is on Base chain
    const chain = 'base';
    const contractAddress = await getContractAddress();
    
    if (!contractAddress) {
      throw new Error('Could not get contract address');
    }
    
    const response = await fetch(
      `${BASE_URL}/chain/${chain}/contract/${contractAddress}/nfts/${tokenId}`,
      { headers: getHeaders() }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching single NFT:', error);
    return null;
  }
};

/**
 * Get the contract address from collection info
 */
const getContractAddress = async () => {
  const collectionInfo = await fetchCollectionInfo();
  if (collectionInfo && collectionInfo.contracts && collectionInfo.contracts.length > 0) {
    return collectionInfo.contracts[0].address;
  }
  return null;
};

/**
 * Check if API key is configured
 */
export const isApiKeyConfigured = () => {
  return !!OPENSEA_API_KEY && OPENSEA_API_KEY !== '';
};

// Fallback data when API is not available
export const FALLBACK_DATA = {
  collection: {
    name: 'The Regenverse',
    description: 'The onchain collection for members of the Regenerates community',
    image_url: '/images/regen.jpg',
    opensea_url: 'https://opensea.io/collection/theregenverse',
    twitter_username: 'regenverse',
  },
  stats: {
    total_supply: 75,
    num_owners: 67,
    floor_price: 0.0045,
    floor_price_symbol: 'ETH',
    total_volume: 0.01,
  },
  // Sample NFT data for fallback display
  nfts: [
    { identifier: '71', name: 'Regen #71', image_url: null },
    { identifier: '72', name: 'Regen #72', image_url: null },
    { identifier: '75', name: 'Regen #75', image_url: null },
    { identifier: '29', name: 'Regen #29', image_url: null },
    { identifier: '73', name: 'Regen #73', image_url: null },
    { identifier: '8', name: 'Regen #8', image_url: null },
    { identifier: '17', name: 'Regen #17', image_url: null },
    { identifier: '19', name: 'Regen #19', image_url: null },
  ],
};

