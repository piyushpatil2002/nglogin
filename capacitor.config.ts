import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // appId: 'io.ionic.starter',
  appId: 'com.dalnex.sample',
  
  appName: 'Dalnex',
  webDir: 'www',
  loggingBehavior:"debug",
  server: {
    androidScheme: 'http', 
    // url:'http://192.168.0.229:8100',
    cleartext:true,
  },
  
  plugins: {
    capacitorHttp:{enabled:true},
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
