import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingBottom: 10,
  },
  boxRepository: {
    width: "100%",
    paddingVertical: 32,
    backgroundColor: "#333",
    borderBottomColor: "#eee",
    borderWidth: 0.5,
  },
  boxTitle: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  textDescription: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 20,
  },

  detailYellowLeft: {
    width: 50,
    height: 50,
    backgroundColor: "#fc0",
    borderRadius: 10,
    marginLeft: -40,
  },

  boxFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  boxFooterLeft: {
    flexDirection: "row",
  },
  boxFooterHight: {
    flexDirection: "row",
  },
  footerText: {
    color: "#fff",
  },
  listStyle: {
    paddingBottom: 85,
  },
});

export default styles;
