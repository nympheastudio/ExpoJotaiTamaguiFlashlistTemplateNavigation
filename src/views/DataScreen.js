// src/views/DataScreen.js
import React from 'react';
import { useAtom } from 'jotai';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { FlashList } from '@shopify/flash-list';
import { YStack, H1 } from 'tamagui';
import { primaryColorAtom, fontSizeAtom } from '../store/settingsAtoms';
import Card from '../components/Card';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

const DataScreen = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchData,
  });

  const [primaryColor] = useAtom(primaryColorAtom);
  const [fontSize] = useAtom(fontSizeAtom);

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.text}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <H1 style={[styles.heading, { color: primaryColor, fontSize }]}>Posts</H1>
      <FlashList
        data={data}
        estimatedItemSize={150}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  text: {
    color: '#000',
  },
});

export default DataScreen;
