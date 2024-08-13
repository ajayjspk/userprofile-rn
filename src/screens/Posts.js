import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/EvilIcons';
import Iconssss from 'react-native-vector-icons/Entypo';

{/* <Icon name='hearto' size={20} color="red" /> */}

const Posts = ({route}) => {
  // const { imageUri } = route.params;

  const postsData = {
    post1: {
      username: 'imogen_thomas',
      profilePic: 'https://dummyimage.com/50x50/000/fff.png&text=IT', // Replace with a valid URL
      postImage: 'https://dummyimage.com/600x400/000/fff.png&text=Post+Image', // Replace with a valid URL
      likedBy: 'TRIBE',
      otherLikes: 'others',
      description: '#ad let’s start the day right with...',
      daysAgo: '1 day ago',
    },
    post2: {
      username: 'john_doe',
      profilePic: 'https://dummyimage.com/50x50/000/fff.png&text=JD', // Replace with a valid URL
      postImage: 'https://dummyimage.com/600x400/000/fff.png&text=Morning+Coffee', // Replace with a valid URL
      likedBy: 'alice_wonder',
      otherLikes: 'others',
      description: 'Starting the day with a cup of freshly brewed coffee ☕️ #morningvibes',
      daysAgo: '2 days ago',
    },
    post3: {
      username: 'emily_clark',
      profilePic: 'https://dummyimage.com/50x50/000/fff.png&text=EC', // Replace with a valid URL
      postImage: 'https://dummyimage.com/600x400/000/fff.png&text=Beach+Day', // Replace with a valid URL
      likedBy: 'beach_bum',
      otherLikes: 'others',
      description: 'Enjoying the sunny day at the beach 🏖️ #beachlife #sunnyday',
      daysAgo: '3 days ago',
    },
    post4: {
      username: 'mike_williams',
      profilePic: 'https://dummyimage.com/50x50/000/fff.png&text=MW', // Replace with a valid URL
      postImage: 'https://dummyimage.com/600x400/000/fff.png&text=Gym+Session', // Replace with a valid URL
      likedBy: 'fit_life',
      otherLikes: 'others',
      description: 'Crushed the workout today 💪 #fitnessgoals #gymlife',
      daysAgo: '4 days ago',
    }
  };

  return (
    <ScrollView>
      {Object.keys(postsData).map((key) => {
        const post = postsData[key];
        return (
          <View key={key} style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Image source={{ uri: post.profilePic }} style={styles.profilePic} />
              <Text style={styles.username}>{post.username}</Text>
              <Iconssss name='dots-three-vertical' size={20} color="black"   style={styles.menuIcon} />
            </View>

            {/* Post Image */}
            <Image source={{ uri: post.postImage }} style={styles.postImage} />
            {/* <Image source={{  uri: imageUri }} style={styles.postImage} /> */}

            {/* Footer */}
            <View style={styles.footer}>
              {/* Like and Comment Icons */}
              <View style={styles.iconsContainer}>
              <Icon name='hearto' size={30} color="red"   style={styles.icon} />
                {/* <Image
                  source={{ uri: 'https://dummyimage.com/30x30/000/fff.png&text=♥' }}
                  style={styles.icon}
                /> */}
                <Iconss name='comment' size={35} color="red"   style={styles.icon} />
                <Icons name='share' size={30} color="red"   style={styles.icon} />
              </View>

              {/* Promotion Button */}
              {/* <TouchableOpacity style={styles.promoteButton}>
                <Text style={styles.promoteText}>Promote</Text>
              </TouchableOpacity> */}

              {/* Likes and Description */}
              <Text style={styles.likesText}>
                Liked by {post.likedBy} and {post.otherLikes}
              </Text>
              <Text style={styles.descriptionText}>
                <Text style={styles.username}>{post.username} </Text>
                {post.description}
              </Text>

              {/* Time */}
              <Text style={styles.timeText}>{post.daysAgo}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    color:'black'
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  postImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  footer: {
    marginTop: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  promoteButton: {
    backgroundColor: '#3897f0',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  promoteText: {
    color: '#000',
    fontWeight: 'bold',
  },
  likesText: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  descriptionText: {
    color: '#000',
    marginBottom: 5,
  },
  timeText: {
    color: '#888',
    fontSize: 12,
  },
});

export default Posts;