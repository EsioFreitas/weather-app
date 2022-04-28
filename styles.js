import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 50,
  },
  reloadContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 300,
    resizeMode: "contain",
    marginBottom: 24,
  },
  tempText: {
    fontSize: 50,
    fontWeight: "bold",
  },
  cityText: {
    fontSize: 25,
    marginBottom: 24,
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  centerText: {
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
});
