import UpdateReservation from "@/app/_components/UpdateReservation";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const reservationId = params.reservationId;

  const { cabinId, numGuests, observations } = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(cabinId);

  // CHANGE

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>
      <UpdateReservation
        observations={observations}
        numGuests={numGuests}
        maxCapacity={maxCapacity}
        reservationId={reservationId}
      />
    </div>
  );
}
