import React from "react";
import { SafeAreaView } from "react-native";

const ExamplePage: React.FC = ({ children }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </>
  );
};

export default ExamplePage;
