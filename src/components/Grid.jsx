// components/Grid.js
const Grid = () => {
  return (
    <div className="grid grid-cols-3 gap-2 w-96 h-96">
      <div className="bg-[#44967E] rounded-tl-3xl rounded-bl-3xl"></div>
      <div className="bg-[#DFDFDF]"></div>
      <div className="bg-[#a58d9c]"></div>
      <div className="bg-[#DFDFDF]"></div>
      <div className="bg-[#F1AEDA] rounded-tl-3xl rounded-br-3xl"></div>
      <div className="bg-[#DFDFDF] rounded-br-3xl"></div>
      <div className="bg-[#DFDFDF] rounded-br-3xl"></div>
      <div className="bg-[#44967E] rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"></div>
      <div className="bg-[#F1AEDA] rounded-bl-3xl rounded-br-3xl"></div>
    </div>
  );
};

export default Grid;