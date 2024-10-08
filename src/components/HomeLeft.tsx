import FolderStructure from "./FolderStructure";

const HomeLeft = () => {
  return (
    <div>
      <div className="text-sm">
        <button className="bg-black text-white p-2 mt-2 rounded-2xl w-[8rem]">
          Expand All
        </button>
        <button className="bg-gray-100 text-black p-2 mt-2 ml-2 rounded-2xl w-[8rem]">
          Collapse All
        </button>
      </div>
      <div className="mt-4">
        <FolderStructure />
      </div>
    </div>
  );
};

export default HomeLeft;
