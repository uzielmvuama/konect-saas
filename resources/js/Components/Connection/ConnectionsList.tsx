import React from "react";
import ConnectionItem from "@/Components/Connection/ConnectionItem";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { pluralize } from "@/Utils/Functions/globals";
import EmptyData from "@/Components/Emtpy/EmptyData";

type DisplayType = "list" | "grid";

interface ConnectionListProps {
  initialDisplayType: DisplayType;
  konects: any[];
}

const ConnectionList: React.FC<ConnectionListProps> = ({ initialDisplayType, konects }) => {
  const [displayType, setDisplayType] = React.useState<DisplayType>(initialDisplayType);

  const activeClass =
    "bg-gray-100 focus:bg-gray-200 focus:text-gray-800 dark:focus:text-neutral-200 dark:bg-neutral-700 dark:focus:bg-neutral-600";
  console.log(konects);

  return (
    <>
      {/* Connections */}
      <div className="xl:p-5 space-y-4 flex flex-col xl:bg-white xl:border xl:border-gray-200 xl:shadow-2xs xl:rounded-xl dark:xl:bg-neutral-800 dark:xl:border-neutral-700">
        {/* Header */}
        <div className="flex justify-between items-center gap-x-2">
          <h2 className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
            {konects.length + " " + pluralize("Result", konects.length)}
          </h2>
          {/* Button Group */}
          <div className="p-[3px] flex items-center bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 xl:dark:bg-neutral-800 dark:border-neutral-700">
            <span
              className={`cursor-pointer inline-flex shrink-0 justify-center items-center size-7.5 border-md text-gray-800 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:focus:text-neutral-500 ${displayType == "grid" && activeClass}`}
              onClick={() => setDisplayType("grid")}
            >
              <HiOutlineViewGrid />
            </span>
            <span
              className={`cursor-pointer inline-flex shrink-0 justify-center items-center size-7.5 border-md text-gray-800 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:focus:text-neutral-500${displayType == "list" && activeClass}`}
              onClick={() => setDisplayType("list")}
            >
              <HiOutlineViewList />
            </span>
          </div>
          {/* End Button Group */}
        </div>
        {/* End Header */}
        {konects.length == 0 ? (
          <EmptyData />
        ) : (
          <>
            {displayType === "list" ? (
              <div className="space-y-3">
                {konects.map((konect, index) => {
                  const isUser = konect.ko_user_info ? konect.ko_user_info.kuser != null ? true : false : false;

                  return (
                    <ConnectionItem
                      key={index}
                      keyId={index}
                      type={displayType}
                      firstname={
                        isUser ? konect.ko_user_info.kuser.firstname : konect.ko_user_info?.firstname
                      }
                      name={isUser ? konect.ko_user_info.kuser.name : konect.ko_user_info?.name}
                      email={isUser ? konect.ko_user_info.kuser.email : konect.ko_user_info?.email}
                      avatarUrl={isUser ? konect.ko_user_info.kuser?.profile_photo_url : ""}
                      connectionsCount={isUser ? konect.ko_user_info.kuser?.konects.length : null}
                      status={isUser}
                      description={isUser ? konect.ko_user_info?.kuser?.title : ""}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 xl:gap-5">
                {konects.map((konect, index) => {
                    const isUser = konect.ko_user_info ? konect.ko_user_info.kuser != null ? true : false : false;

                  return (
                    <ConnectionItem
                      key={index}
                      keyId={index}
                      type={displayType}
                      firstname={
                        isUser ? konect.ko_user_info.kuser.firstname : konect.ko_user_info?.firstname
                      }
                      name={isUser ? konect.ko_user_info.kuser.name : konect.ko_user_info?.name}
                      email={isUser ? konect.ko_user_info.kuser.email : konect.ko_user_info?.email}
                      avatarUrl={isUser ? konect.ko_user_info?.kuser?.profile_photo_url : ""}
                      connectionsCount={isUser ? konect.ko_user_info?.kuser?.konects.length : null}
                      status={isUser}
                      description={isUser ? konect.ko_user_info.kuser?.title : ""}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <div className="grid grid-cols-2 items-center gap-y-2 sm:gap-y-0 sm:gap-x-5">
          <p className="text-sm text-gray-800 dark:text-neutral-200">
            <span className="font-medium"> {konects.length}</span>
            <span className="text-gray-500 dark:text-neutral-500">
              {" "}
              {pluralize("Result", konects.length)}
            </span>
          </p>
          {/* Pagination */}
          <nav className="flex justify-end items-center gap-x-1" aria-label="Pagination">
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
              aria-label="Previous"
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="sr-only">Previous</span>
            </button>
            <div className="flex items-center gap-x-1">
              <span
                className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-gray-100 text-gray-800 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:text-white"
                aria-current="page"
              >
                1
              </span>
              <span className="min-h-9.5 flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
                of
              </span>
              <span className="min-h-9.5 flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
                3
              </span>
            </div>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
              aria-label="Next"
            >
              <span className="sr-only">Next</span>
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </nav>
          {/* End Pagination */}
        </div>
        {/* End Footer */}
      </div>
      {/* End Connections */}
    </>
  );
};

export default ConnectionList;
