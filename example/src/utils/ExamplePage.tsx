import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

const ExamplePage: React.FC = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </>
  );
};

export default ExamplePage;
