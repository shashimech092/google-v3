import { useRouter } from "next/router";
import SearchOption from "./SearchOption";
import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";

export default function SearchHeaderOption() {
  const router = useRouter()
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchOption title='All' Icon={SearchIcon} selected={router.query.searchType==="" || !router.query.searchType}/>
      <SearchOption title='Images' Icon={PhotographIcon} selected={router.query.searchType==="image"}/>
    </div>
  )
}
