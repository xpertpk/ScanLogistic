import React from "react";
import { Platform, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
const BannerAd = () => {
  const unitID = Platform.select({
     ios: "ca-app-pub-3940256099942544/2934735716",
    android: "ca-app-pub-3940256099942544~5354046379",
  });
 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AdMobBanner
        adUnitID={unitID}
        bannerSize="smartBanner"
        servePersonalizedAds={true}
        style={{
          padding: 0,
        }}
      />
    </View>
  );
};
 
export default BannerAd;