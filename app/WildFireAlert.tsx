import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Polygon } from "react-native-maps";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Camera, CameraView } from "expo-camera"; // Correct import

interface FormData {
  name: string;
  email: string;
  age: number;
  photo: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(18, "You must be at least 18 years old")
    .max(120, "Age must be less than 120"),
  photo: yup.string().required("Photo is required"),
});

const WildfireAlert: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<CameraView | null>(null); // Correctly typed ref
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo) {
        setPhotoUri(photo.uri);
        setValue("photo", photo.uri); // Save photo URI to form state
        setShowCamera(false); // Hide camera after taking picture
      }
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        alwaysBounceHorizontal={true}
        showsHorizontalScrollIndicator={true}
      >
        <View style={styles.header}></View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78822,
              longitude: -122.4324,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Polygon
              coordinates={[
                { latitude: 37.78825, longitude: -122.4324 },
                { latitude: 37.78925, longitude: -122.4324 },
                { latitude: 37.78925, longitude: -122.4314 },
                { latitude: 37.78825, longitude: -122.4314 },
              ]}
              tappable={true}
              onPress={() => alert("First Polygon Area Clicked!")}
              strokeColor="#FF0000"
              fillColor="rgba(255, 0, 0, 0.5)"
            />

            <Polygon
              coordinates={[
                { latitude: 37.78855, longitude: -122.432 },
                { latitude: 37.78955, longitude: -122.432 },
                { latitude: 37.78955, longitude: -122.431 },
                { latitude: 37.78855, longitude: -122.431 },
              ]}
              tappable={true}
              onPress={() => alert("Second Polygon Area Clicked!")}
              strokeColor="#0000FF"
              fillColor="rgba(0, 0, 255, 0.5)"
            />
          </MapView>
        </View>
        <View style={styles.form}>
          <View style={styles.container}>
            <Text>Name</Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name && (
              <Text style={styles.error}>{errors.name.message}</Text>
            )}

            <Text>Email</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                />
              )}
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}

            <Text>Age</Text>
            <Controller
              control={control}
              name="age"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value ? value.toString() : ""}
                  keyboardType="numeric"
                />
              )}
            />
            {errors.age && (
              <Text style={styles.error}>{errors.age.message}</Text>
            )}

            <Text>Photo</Text>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.image} />
            ) : (
              <Button title="Take Photo" onPress={() => setShowCamera(true)} />
            )}
            {errors.photo && (
              <Text style={styles.error}>{errors.photo.message}</Text>
            )}

            {showCamera && (
              <View style={styles.cameraContainer}>
                <CameraView style={styles.camera} ref={cameraRef} />
                <View style={styles.cameraButtonContainer}>
                  <Button
                    title="Take Picture"
                    onPress={takePicture}
                    color="white"
                  />
                  <Button
                    title="Cancel"
                    onPress={() => setShowCamera(false)}
                    color="red"
                  />
                </View>
              </View>
            )}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: { flex: 1 },
  header: {
    backgroundColor: "red",
    height: 100,
  },
  mapContainer: {
    height: 200,
  },
  form: {
    backgroundColor: "blue",
    height: 4000,
  },
  map: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  cameraContainer: {
    position: "relative",
    width: "100%",
    height: 400,
  },
  camera: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  cameraButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
});

export default WildfireAlert;
