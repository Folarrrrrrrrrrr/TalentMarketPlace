import SearchFilter from "./filter/SearchFilter";
import LocationFilter from "./filter/LocationFilter";
import CategoryFilter from "./filter/CategoryFilter";
import JobTypeFilter from "./filter/JobTypeFilter";
import ExperienceFilter from "./filter/ExperienceFilter";
import DatePostedFilter from "./filter/DatePostedFilter";
// import SalaryFilter from "./filter/SalaryFilter";
import TagsFilter from "./filter/TagsFilter";
import HiringBanner from "./filter/HiringBanner";




export default function JobFilterSidebar() {




  return (
    <aside className="space-y-4 bg-green-50 content-around min-h-full p-4 rounded-lg" >
      <SearchFilter />
      <LocationFilter />
      <CategoryFilter />
      <JobTypeFilter />
      <ExperienceFilter />
      <DatePostedFilter />
      {/* <SalaryFilter /> */}
      <TagsFilter />
      {/* <HiringBanner /> */}
    </aside>
  );
}
