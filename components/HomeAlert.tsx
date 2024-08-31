import { FlatList } from "react-native";
import HomeNotification from "./HomeNotification";

const DATA = [
  {
    id: "1",
    title: "Title 1",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    id: "2",
    title: "Title 2",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    id: "3",
    title: "Title 3",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    id: "4",
    title: "Title 4",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    id: "5",
    title: "Title 5",
    date: "24-08-18",
    time: "02:49 PM",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
];

export default function HomeAlert() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <HomeNotification
          id={item.id}
          title={item.title}
          date={item.date}
          time={item.time}
          description={item.description}
        />
      )}
      keyExtractor={(item) => item.id}
      className="m-3"
    />
  );
}
