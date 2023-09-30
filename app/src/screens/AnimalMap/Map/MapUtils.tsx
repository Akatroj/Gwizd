export const cracowCoordinates = {
  latitude: 50.0647,
  longitude: 19.945,
};

export const CRACOW = {
  COORDINATES: cracowCoordinates,
  REGION: {
    ...cracowCoordinates,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
} as const;
