import { ReactElement } from "react";

interface Exercise {
  name: string;
  description: string;
}

const workoutsList: Exercise[] = [
  {
    name: "Morning Stretch Routine",
    description:
      "A gentle routine to wake up your body and prepare for the day ahead.",
  },
  {
    name: "Full Body HIIT Workout",
    description:
      "High-intensity interval training to get your heart pumping and burn calories.",
  },
  {
    name: "Yoga for Flexibility",
    description:
      "A series of yoga poses to improve flexibility and reduce muscle tension.",
  },
];

const Workouts = (): ReactElement => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Workouts</h2>
      <ul className="space-y-4">
        {workoutsList.map((workout, index) => (
          <li key={index}>
            <h3 className="text-xl font-semibold">{workout.name}</h3>
            <p>{workout.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
