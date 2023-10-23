import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Avatar, Card, Text } from 'react-native-paper';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('Username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
      // Contoh data untuk pengulangan tabel
      const exampleTableData = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'];
      setTableData(exampleTableData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Card.Title
        title={`Halo, ${username}`}
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        style={styles.cardUser}
      />
      <Card style={styles.cardList}>
        <Card.Title title="List Tugas" />
        {}
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
    marginRight: 20,
  },
  cardUser: {
    top: 0,
    right: 0,
  },
  cardList: {
    width: '100%',
    marginTop: 20,
  },
});

export default HomeScreen;
