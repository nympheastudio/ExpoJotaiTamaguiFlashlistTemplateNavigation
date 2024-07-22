// src/components/Card.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button, Share } from 'react-native';
import { H2, Paragraph, YStack } from 'tamagui';
import { useAtom } from 'jotai';
import { primaryColorAtom, fontSizeAtom } from '../store/settingsAtoms';

const Card = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [primaryColor] = useAtom(primaryColorAtom);
  const [fontSize] = useAtom(fontSizeAtom);

  const onShare = async () => {
    try {
      await Share.share({
        message: `Check out this post: ${item.title}\n\n${item.body}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <YStack style={styles.card}>
          <Image
            source={{ uri: `https://picsum.photos/200?random=${item.id}` }}
            style={styles.image}
          />
          <H2 style={[styles.title, { color: primaryColor, fontSize }]}>{item.title}</H2>
          <Paragraph style={[styles.body, { color: primaryColor, fontSize }]}>
            {item.body}
          </Paragraph>
        </YStack>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={{ uri: `https://picsum.photos/200?random=${item.id}` }}
              style={styles.modalImage}
            />
            <Text style={[styles.modalTitle, { color: primaryColor, fontSize }]}>
              {item.title}
            </Text>
            <Text style={[styles.modalText, { color: primaryColor, fontSize }]}>
              {item.body}
            </Text>
            <Button
              title="Share"
              onPress={onShare}
              color={primaryColor}
            />
            <Button
              title="Close"
              onPress={() => setModalVisible(!modalVisible)}
              color={primaryColor}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    fontSize: 14,
    marginTop: 4,
    color: '#000',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Card;
