import { Link } from "react-router-dom";

const Dropdown = ({name, email}) => {
  return (
    <div class="flex items-center">
      <div class="flex items-center ms-3">
        <div>
          <button
            type="button"
            class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
        </div>
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
          id="dropdown-user"
        >
          <div class="px-4 py-3" role="none">
            <p class="text-sm text-gray-900 " role="none">
              {name}
            </p>
            <p
              class="text-sm font-medium text-gray-900 truncate"
              role="none"
            >
              {email}
            </p>
          </div>
          <ul class="py-1" role="none">
            <li>
              <Link
                to="/login"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   dark:hover:text-black"
                role="menuitem"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
