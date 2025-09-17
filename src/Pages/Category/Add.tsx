import SubmitButton from "../../components/SubmitButton";
import TextFieldWithLabel from "../../components/TextFieldWithLabel";

const CategoryAdd = () => {
  return (
    <>
      {/* <!-- Category Form --> */}
      <div className="shadow-2xl rounded-sm py-4 mx-4 px-4 mt-2">
        <h1 className="font-bold md:text-4xl sm:text-md">Category Form</h1>
        <form action="" className="space-y-5">
          {/* <!-- InputFieldWithLabel --> */}
          {/* <div className="grid gap-2">
            <label htmlFor="categoryName">Name</label>
            <input
              type="text"
              id="categoryName"
              className="w-full h-8 border-1 focus:outline-none focus:border-amber-300 px-2"
            />
          </div> */}

          <TextFieldWithLabel type="text" label="CaTEGORY Name" />

          <TextFieldWithLabel type="text" label="Category Description" />

          {/* <!-- InputFieldWithLabel --> */}
          {/* <div className="grid gap-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="w-full border-1 focus:outline-none focus:border-amber-300 h-8 px-2"
            />
          </div> */}

          {/* <!-- mt-5 w-max --> */}
          {/* <a className="bg-black text-white px-4 py-2 rounded-sm mt-5 flex items-center hover:cursor-pointer  gap-2 w-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width="20"
              height="20"
              fill="white"
            >
              <path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z" />
            </svg>
            Submit
          </a> */}

          <SubmitButton
            label="Submit"
            color="bg-black"
            svgIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width="20"
                height="20"
                fill="white"
              >
                <path d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z" />
              </svg>
            }
          />
        </form>
      </div>
    </>
  );
};

export default CategoryAdd;
