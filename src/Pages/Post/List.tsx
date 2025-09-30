import NavigationButton from "../../components/NavigationButton";
import Table from "../../components/Table";
import Title from "../../components/Title";

const ListPost = () => {
  return (
    <>
      {/* Catgeory Table Plus ADD Hyper Link with Category List Text  */}
      <div className="shadow-2xl rounded-sm py-8 mx-4 px-4">
        {/* <!-- Add Category  Hyper Link + Category List Text --> */}
        <div className="flex justify-between py-4 flex-wrap lg:flex-nowrap">
          {/* <h1 className="font-bold sm:text-5xl mt-5 text-xl">Post List</h1> */}
          <Title text="Post List" />

          {/* <!-- h-min unique for it --> */}

          {/* <!-- Add Hyper Link --> */}

          <NavigationButton
            label="Add"
            svgIcon={
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
              >
                <path d="M14.15 1.4C14.15 0.791565 13.4127 0.300003 12.5 0.300003C11.5874 0.300003 10.85 0.791565 10.85 1.4V6.9H2.60001C1.68736 6.9 0.950012 7.39156 0.950012 8C0.950012 8.60844 1.68736 9.1 2.60001 9.1H10.85V14.6C10.85 15.2084 11.5874 15.7 12.5 15.7C13.4127 15.7 14.15 15.2084 14.15 14.6V9.1H22.4C23.3127 9.1 24.05 8.60844 24.05 8C24.05 7.39156 23.3127 6.9 22.4 6.9H14.15V1.4Z" />
              </svg>
            }
            type="min-height-content"
          />

          {/* <SubmitButton
            label="Add"
            svgIcon={
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
              >
                <path d="M14.15 1.4C14.15 0.791565 13.4127 0.300003 12.5 0.300003C11.5874 0.300003 10.85 0.791565 10.85 1.4V6.9H2.60001C1.68736 6.9 0.950012 7.39156 0.950012 8C0.950012 8.60844 1.68736 9.1 2.60001 9.1H10.85V14.6C10.85 15.2084 11.5874 15.7 12.5 15.7C13.4127 15.7 14.15 15.2084 14.15 14.6V9.1H22.4C23.3127 9.1 24.05 8.60844 24.05 8C24.05 7.39156 23.3127 6.9 22.4 6.9H14.15V1.4Z" />
              </svg>
            }
            color="bg-black"
            type="min-height-content"
          /> */}

          {/* <a
            href="/category/add"
            className="bg-black px-4 py-2 flex items-center h-min text-white hover:cursor-pointer gap-3 rounded-sm"
          >
            Add
          </a> */}
        </div>

        <div className="overflow-x-auto">
          <Table />
        </div>
      </div>
    </>
  );
};

export default ListPost;
