import { Avatar, Button, Card, Text } from "react-native-paper";

interface HomeNotificationProps {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
}

const fireIcon = () => (
  <Avatar.Icon size={45} icon="fire" className="bg-red-500" />
);

export default function HomeNotification({
  id,
  title,
  date,
  time,
  description,
}: HomeNotificationProps) {
  return (
    <Card className="m-2 bg-white shadow-lg rounded-lg">
      <Card.Title
        title={title}
        subtitle={date + " " + time}
        titleStyle={{ fontWeight: "600" }}
        subtitleStyle={{ color: "#6b7280" }}
        left={fireIcon}
      />
      <Card.Content>
        <Text className="text-gray-700">{description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button className="text-red-500">Mark as Done</Button>
      </Card.Actions>
    </Card>
  );
}
