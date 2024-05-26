import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

/**
searchParams can of course
not be known at runtime, right?
What this means is that
whenever we make use of the searchParams,
the page can no longer be statically rendered.
So right now, this cabin's overview page
will now always be dynamically rendered
meaning that what we have here,
so this revalidate, this now no longer takes any effect
because this only applies to statically generated pages,
which makes sense, right?
So there's no need to revalidate a page
that is dynamic anyway.
 */
// export const revalidate = 36000;
export const metadata = {
  title: "Cabin ",
};

export default function Page({ searchParams }) {
  // CHANGE
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      {/* which was the fact that no loading spinner
was rendering here.
So the fallback was not shown.
And once again, the reason behind that is that
all page navigations are automatically wrapped
in transitions in Next.js.
And so in that case,
and you can also read that in the suspense documentations.
So in that case,
suspense will not re-render the fallback.
And the way we fix that is to pass in a unique key.
And so then whenever the key is different
and the child component here suspense,
then the fallback will be shown again, okay? */}
      <Suspense key={filter} fallback={<Spinner />}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
