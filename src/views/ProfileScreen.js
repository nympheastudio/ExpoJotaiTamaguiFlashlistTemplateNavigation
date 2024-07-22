// src/views/ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Device from 'expo-device';

const ProfileScreen = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDeviceInfo = async () => {
      try {
        const deviceInfo = {
          brand: Device.brand,
          manufacturer: Device.manufacturer, // Correct the typo
          modelName: Device.modelName,
          osName: Device.osName,
          osVersion: Device.osVersion,
        };
        setDeviceInfo(deviceInfo);
      } catch (e) {
        setError(e.message);
      }
    };

    getDeviceInfo();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: {error}</Text>
      </View>
    );
  }

  if (!deviceInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Information</Text>
      <Text style={styles.info}>Brand: {deviceInfo.brand}</Text>
      <Text style={styles.info}>Manufacturer: {deviceInfo.manufacturer}</Text>
      <Text style={styles.info}>Model Name: {deviceInfo.modelName}</Text>
      <Text style={styles.info}>OS Name: {deviceInfo.osName}</Text>
      <Text style={styles.info}>OS Version: {deviceInfo.osVersion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default ProfileScreen;
