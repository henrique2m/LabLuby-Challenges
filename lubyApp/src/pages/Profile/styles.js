import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingBottom: 10,
  },
  header: {
    width: "100%",
    height: 150,
    alignItems: "center",
    backgroundColor: "#111",
  },
  headerBar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  headerBarTextLeft: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerBarRight: {
    width: 60,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBarTextRight: {
    color: "#fff",
    fontSize: 16,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#fff",
    marginTop: 25,
  },
  boxBasicInfo: {
    width: "100%",
    marginTop: 120,
  },
  boxTitle: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailYellowLeft: {
    width: 50,
    height: 50,
    backgroundColor: "#fc0",
    borderRadius: 10,
    marginLeft: -40,
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  basicInfoText: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 20,
  },
  engagement: {
    width: "100%",
    height: 120,
    backgroundColor: "#444",
    marginTop: 30,
    marginBottom: 30,

    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  boxEngagementInfo: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  engagementNumber: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  engagementText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  boxBio: {
    width: "100%",
  },
});

export default styles;
