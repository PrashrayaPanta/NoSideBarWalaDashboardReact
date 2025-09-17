import SubmitButton from "../../components/SubmitButton";

const ListCategory = () => {
  return (
    <>
      {/* Catgeory Table Plus ADD Hyper Link with Category List Text  */}
      <div className="shadow-2xl rounded-sm py-8 mx-4 px-4">
        {/* <!-- Add Category  Hyper Link + Category List Text --> */}
        <div className="flex justify-between py-4 flex-wrap lg:flex-nowrap">
          <h1 className="font-bold sm:text-5xl mt-5 text-xl">Category List</h1>

          {/* <!-- h-min unique for it --> */}

          {/* <!-- Add Hyper Link --> */}

          <SubmitButton
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
          />

          {/* <a
            href="/category/add"
            className="bg-black px-4 py-2 flex items-center h-min text-white hover:cursor-pointer gap-3 rounded-sm"
          >
            Add
          </a> */}
        </div>

        <div className="overflow-x-auto">
          <table className="px-3 w-full">
            <thead>
              <tr className="">
                <th className="bg-black text-left border-r border-gray-300 text-white px-2">
                  Name
                </th>
                <th className="bg-black text-left border-r border-gray-300 text-white px-2">
                  created at
                </th>
                <th className="bg-black text-left border-r border-gray-300 text-white px-2">
                  Updated at
                </th>
                <th className="bg-black text-left border-r border-gray-300 text-white px-2">
                  Action
                </th>
              </tr>
            </thead>

            {/* <!-- First Row --> */}
            <tr className="text-gray-800">
              {/* <!-- Category Name --> */}
              <td className="px-2 border border-gray-300">Fashion</td>

              {/* <!-- Created At --> */}
              <td className="px-2 border border-gray-300">
                Aug 15, 2025 2:13 PM
              </td>

              {/* <!-- Updated At --> */}
              <td className="px-2 border border-gray-300">
                Aug 15, 2025 2:13 PM
              </td>

              {/* <!-- Actions --> */}
              <td className="px-2 py-2 border border-gray-300">
                <div className="flex items-center gap-3">
                  {/* <!-- Edit Hyperlink --> */}

                  <SubmitButton
                    label="Edit"
                    svgIcon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 23 30"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.076 4.87514L19.6778 10.1603C19.8295 10.3829 19.8295 10.7462 19.6778 10.9689L10.9569 23.7658L7.25139 24.3693C6.75625 24.4513 6.33698 23.8361 6.39288 23.1095L6.80417 17.672L15.525 4.87514C15.6767 4.65248 15.9243 4.65248 16.076 4.87514ZM22.5448 3.53334L20.5962 0.673965C19.9892 -0.21666 19.003 -0.21666 18.392 0.673965L16.9785 2.74818C16.8267 2.97084 16.8267 3.33412 16.9785 3.55678L20.5802 8.84193C20.7319 9.06459 20.9795 9.06459 21.1313 8.84193L22.5448 6.76772C23.1517 5.87123 23.1517 4.42397 22.5448 3.53334ZM15.3333 20.2853V26.2501H2.55556V7.50014H11.7316C11.8594 7.50014 11.9792 7.42397 12.071 7.29506L13.6682 4.95131C13.9717 4.506 13.7561 3.75014 13.3288 3.75014H1.91667C0.858507 3.75014 0 5.0099 0 6.56264V27.1876C0 28.7404 0.858507 30.0001 1.91667 30.0001H15.9722C17.0304 30.0001 17.8889 28.7404 17.8889 27.1876V17.9415C17.8889 17.3146 17.3738 17.004 17.0703 17.4435L15.4731 19.7872C15.3852 19.922 15.3333 20.0978 15.3333 20.2853Z" />
                      </svg>
                    }
                    color="bg-black"
                  />
                  {/* <a
                    href="/category/edit"
                    className="bg-black text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-gray-800 transition"
                  >
                    <span>Edit</span>
                  </a> */}

                  {/* <!-- Delete Button --> */}

                  <SubmitButton
                    label="Delete"
                    svgIcon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 36 28"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.9848 1.16136L10.2857 2.54545H2.57143C1.14911 2.54545 0 3.30379 0 4.24242C0 5.18106 1.14911 5.93939 2.57143 5.93939H33.4286C34.8509 5.93939 36 5.18106 36 4.24242C36 3.30379 34.8509 2.54545 33.4286 2.54545H25.7143L25.0152 1.16136C24.6616 0.466667 23.6812 0 22.5723 0H13.4277C12.3188 0 11.3384 0.466667 10.9848 1.16136ZM33.4286 8.48485H2.57143L4.26696 25.6189C4.39554 26.9606 6.08304 28 8.11607 28H27.8839C29.917 28 31.6045 26.9606 31.733 25.6189L33.4286 8.48485Z" />
                      </svg>
                    }
                    color="bg-red-500"
                  />
                  {/* <a
                    href="#"
                    className="bg-red-500 text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-red-600 transition"
                  >
                    <span>Delete</span>
                  </a> */}
                </div>
              </td>
            </tr>

            {/* <!-- Second Row --> */}

            <tr className="text-gray-800">
              {/* <!-- Category Name --> */}
              <td className="px-2 border border-gray-300">Fashion</td>

              {/* <!-- Created At --> */}
              <td className="px-2 border border-gray-300">
                Aug 15, 2025 2:13 PM
              </td>

              {/* <!-- Updated At --> */}
              <td className="px-2 border border-gray-300">
                Aug 15, 2025 2:13 PM
              </td>

              {/* <!-- Actions --> */}
              <td className="px-2 py-2 border border-gray-300">
                <div className="flex items-center gap-3">
                  {/* <!-- Edit Button --> */}
                  <a
                    href="/category/edit"
                    className="bg-black text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-gray-800 transition"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 23 30"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.076 4.87514L19.6778 10.1603C19.8295 10.3829 19.8295 10.7462 19.6778 10.9689L10.9569 23.7658L7.25139 24.3693C6.75625 24.4513 6.33698 23.8361 6.39288 23.1095L6.80417 17.672L15.525 4.87514C15.6767 4.65248 15.9243 4.65248 16.076 4.87514ZM22.5448 3.53334L20.5962 0.673965C19.9892 -0.21666 19.003 -0.21666 18.392 0.673965L16.9785 2.74818C16.8267 2.97084 16.8267 3.33412 16.9785 3.55678L20.5802 8.84193C20.7319 9.06459 20.9795 9.06459 21.1313 8.84193L22.5448 6.76772C23.1517 5.87123 23.1517 4.42397 22.5448 3.53334ZM15.3333 20.2853V26.2501H2.55556V7.50014H11.7316C11.8594 7.50014 11.9792 7.42397 12.071 7.29506L13.6682 4.95131C13.9717 4.506 13.7561 3.75014 13.3288 3.75014H1.91667C0.858507 3.75014 0 5.0099 0 6.56264V27.1876C0 28.7404 0.858507 30.0001 1.91667 30.0001H15.9722C17.0304 30.0001 17.8889 28.7404 17.8889 27.1876V17.9415C17.8889 17.3146 17.3738 17.004 17.0703 17.4435L15.4731 19.7872C15.3852 19.922 15.3333 20.0978 15.3333 20.2853Z" />
                    </svg>
                    <span>Edit</span>
                  </a>

                  {/* <!-- Delete Button --> */}
                  <a
                    href="#"
                    className="bg-red-500 text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-red-600 transition"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 36 28"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.9848 1.16136L10.2857 2.54545H2.57143C1.14911 2.54545 0 3.30379 0 4.24242C0 5.18106 1.14911 5.93939 2.57143 5.93939H33.4286C34.8509 5.93939 36 5.18106 36 4.24242C36 3.30379 34.8509 2.54545 33.4286 2.54545H25.7143L25.0152 1.16136C24.6616 0.466667 23.6812 0 22.5723 0H13.4277C12.3188 0 11.3384 0.466667 10.9848 1.16136ZM33.4286 8.48485H2.57143L4.26696 25.6189C4.39554 26.9606 6.08304 28 8.11607 28H27.8839C29.917 28 31.6045 26.9606 31.733 25.6189L33.4286 8.48485Z" />
                    </svg>
                    <span>Delete</span>
                  </a>
                </div>
              </td>
            </tr>

            {/* <!-- Third Row --> */}

            <tr className="text-gray-800">
              {/* <!-- Category Name --> */}
              <td className="px-2 border border-gray-300">Fashion</td>

              {/* <!-- Created At --> */}
              <td className="px-2 border border-gray-300">
                Aug 15, 2025 2:13 PM
              </td>

              {/* <!-- Updated At --> */}
              <td className="px-2 border border-gray-300">
                Aug 15, 2025 2:13 PM
              </td>

              {/* <!-- Actions --> */}
              <td className="px-2 py-2 border border-gray-300">
                {/* <!-- Two Hypewr Link with Edit and Delete Button --> */}
                <div className="flex items-center gap-3">
                  {/* <!-- Edit Button -->
                <!-- All Same --> */}
                  <a
                    href="/category/edit"
                    className="bg-black text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-gray-800 transition"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 23 30"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.076 4.87514L19.6778 10.1603C19.8295 10.3829 19.8295 10.7462 19.6778 10.9689L10.9569 23.7658L7.25139 24.3693C6.75625 24.4513 6.33698 23.8361 6.39288 23.1095L6.80417 17.672L15.525 4.87514C15.6767 4.65248 15.9243 4.65248 16.076 4.87514ZM22.5448 3.53334L20.5962 0.673965C19.9892 -0.21666 19.003 -0.21666 18.392 0.673965L16.9785 2.74818C16.8267 2.97084 16.8267 3.33412 16.9785 3.55678L20.5802 8.84193C20.7319 9.06459 20.9795 9.06459 21.1313 8.84193L22.5448 6.76772C23.1517 5.87123 23.1517 4.42397 22.5448 3.53334ZM15.3333 20.2853V26.2501H2.55556V7.50014H11.7316C11.8594 7.50014 11.9792 7.42397 12.071 7.29506L13.6682 4.95131C13.9717 4.506 13.7561 3.75014 13.3288 3.75014H1.91667C0.858507 3.75014 0 5.0099 0 6.56264V27.1876C0 28.7404 0.858507 30.0001 1.91667 30.0001H15.9722C17.0304 30.0001 17.8889 28.7404 17.8889 27.1876V17.9415C17.8889 17.3146 17.3738 17.004 17.0703 17.4435L15.4731 19.7872C15.3852 19.922 15.3333 20.0978 15.3333 20.2853Z" />
                    </svg>
                    Edit
                  </a>

                  {/* <!-- Delete Button --> */}
                  <a
                    href="#"
                    className="bg-red-500 text-white flex items-center px-4 py-2 gap-2 rounded-sm hover:bg-red-600 transition"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 36 28"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.9848 1.16136L10.2857 2.54545H2.57143C1.14911 2.54545 0 3.30379 0 4.24242C0 5.18106 1.14911 5.93939 2.57143 5.93939H33.4286C34.8509 5.93939 36 5.18106 36 4.24242C36 3.30379 34.8509 2.54545 33.4286 2.54545H25.7143L25.0152 1.16136C24.6616 0.466667 23.6812 0 22.5723 0H13.4277C12.3188 0 11.3384 0.466667 10.9848 1.16136ZM33.4286 8.48485H2.57143L4.26696 25.6189C4.39554 26.9606 6.08304 28 8.11607 28H27.8839C29.917 28 31.6045 26.9606 31.733 25.6189L33.4286 8.48485Z" />
                    </svg>
                    Delete
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListCategory;
