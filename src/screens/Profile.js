import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from './components/GradientButton';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/EvilIcons';
import Iconsss from 'react-native-vector-icons/Octicons';
import Share from 'react-native-share';

const categories = ['Personal', 'Professional', 'Company', 'Nothing', 'Education', 'Others'];

const userProfiles = {
  'Personal': {
    name: 'John Doe',
    profession: 'Software Engineer',
    location: 'San Francisco',
    followers: 1200,
    verified: true,
    description: 'Talks about MicroSurgery, ENT, etc...',
    hashtags: '#MicroSurgery #ENT',
    profilePic: 'https://i.pinimg.com/originals/94/71/9f/94719f6a8147c85104c7c83fdf78c37a.jpg',
    Posts:[
'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ22nKZ2e92aTDby6JBTZwDJPrTpy12vm0Q&s',
'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
'https://media.istockphoto.com/id/1488944909/photo/environment-concept-green-glass-globe-with-a-tree-in-the-forest-with-sunlight-sustainability.webp?b=1&s=170667a&w=0&k=20&c=f89zMjUr7FldJzgS0p8mJyuTxBWgvhv0kBQL7fcSnjs=',
'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
'https://cdn.stocksnap.io/img-thumbs/280h/butterflies-nature_IFVYIKNJC1.jpg',

    ],
  },
  'Professional': {
    name: 'Jane Smith',
    profession: 'Graphic Designer',
    location: 'New York',
    followers: 950,
    verified: false,
    description: 'Talks about MicroSurgery, ENT, etc...',
    hashtags: '#MicroSurgery #ENT',
    profilePic: 'https://e0.pxfuel.com/wallpapers/451/471/desktop-wallpaper-pawan-kalyan-on-instagram-for-dp-vakeelsaab-vakeelsaabfirstlook-pspk26-pawankalyan.jpg',
    Posts:[
'https://lh4.googleusercontent.com/proxy/GXRctodMWYneuN9crdVCnJxB8DxNyeN4RU8L3nEP7FQ5QrqyJyvSnWajtbuGKf-ZXfy6Mj9HSkA06mEKOR8YPrI1ETey0a6Xc8IGTSOYv1R6Zfa93p2sZLiXyTPlbd4QdWk',
'https://content3.jdmagicbox.com/comp/def_content/hospitals/default-hospitals-7.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhrDVk8HhQiusHNci8NZzfB0HbXJ-SInz1A&s',
'https://obgyn-media.coloradowomenshealth.com/photos-doctors-in-surgery-400x267.jpg',
'https://npr.brightspotcdn.com/dims4/default/d1baaf3/2147483647/strip/true/crop/800x533+0+0/resize/880x586!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkera%2Ffiles%2F202002%2Fteotia-surgery.jpg',

    ],
  },
  'Company': {
    name: 'Alice Johnson',
    profession: 'Content Writer',
    location: 'Los Angeles',
    followers: 1500,
    verified: true,
    description: 'Talks about MicroSurgery, ENT, etc...',
    hashtags: '#MicroSurgery #ENT',
    profilePic: 'https://wallpapers.com/images/hd/pawan-kalyan-in-black-iinfbd7yzdgzvcxg.jpg',
    Posts:[

    ],
  },
  'Nothing': {
    name: 'Michael Brown',
    profession: 'Data Analyst',
    location: 'Chicago',
    followers: 780,
    verified: false,
    description: 'Talks about MicroSurgery, ENT, etc...',
    hashtags: '#MicroSurgery #ENT',
    profilePic: 'https://i.pinimg.com/736x/95/ee/97/95ee97eebcec23fd70e380cd81616d82.jpg',
    Posts:[

    ],
  },
  'Education': {
    name: 'Emily Davis',
    profession: 'Digital Marketer',
    location: 'Austin',
    followers: 1130,
    verified: true,
    description: 'Talks about MicroSurgery, ENT, etc...',
    hashtags: '#MicroSurgery #ENT',
    profilePic: 'https://www.bollywoodhungama.com/wp-content/uploads/2022/02/bn1.jpg',
    Posts:[

    ],
  },
  'Others': {
    name: 'Robert Wilson',
    profession: 'Product Manager',
    location: 'Seattle',
    followers: 1350,
    verified: true,
    description: 'Talks about MicroSurgery, ENT, etc...',
    hashtags: '#MicroSurgery #ENT',
    profilePic: 'https://i.pinimg.com/736x/48/ef/5e/48ef5e641deadffae9e55d88e4296cdd.jpg',
    Posts:[

    ],
  }
};

const Profile = (navigation ) => {
  // const navigation = useNavigation();

  const [activeCategory, setActiveCategory] = useState('Personal');
  const [followerCounts, setFollowerCounts] = useState(
    Object.fromEntries(categories.map(cat => [cat, userProfiles[cat]?.followers || 0]))
  );
  const [followed, setFollowed] = useState(
    Object.fromEntries(categories.map(cat => [cat, false]))
  );

  const currentProfile = userProfiles[activeCategory];

  const handleFollow = () => {
    if (!followed[activeCategory]) {
      setFollowerCounts(prevCounts => ({
        ...prevCounts,
        [activeCategory]: prevCounts[activeCategory] + 1,
      }));
      setFollowed(prevFollowed => ({
        ...prevFollowed,
        [activeCategory]: true,
      }));
    }
  };

  const share = async () => {
    const options = {
      message: `Check out the profile of ${currentProfile.name}, a ${currentProfile.profession} from ${currentProfile.location}.`,
    };
    try {
      await Share.open(options);
    } catch (err) {
      Alert.alert('Error', 'Unable to share profile.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient colors={['#989e99', '#9d9d9e', '#c5c5c7']} style={{ paddingTop: 30 }}>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(cat => {
              if (cat === activeCategory) {
                return <GradientButton key={cat} value={cat} />;
              } else {
                return (
                  <TouchableOpacity onPress={() => setActiveCategory(cat)} key={cat} style={styles.tabs}>
                    <Text style={styles.text}>{cat}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </ScrollView>
          <View style={{ marginTop: 40 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='hearto' size={20} color="red" />
              <Text>{followerCounts[activeCategory]} Followers</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.button, followed[activeCategory] && styles.disabledButton]} 
                onPress={handleFollow}
                disabled={followed[activeCategory]}
              >
                <Text style={styles.followersText}>{followed[activeCategory] ? 'Following' : 'Follow'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={share}>
                <Text style={styles.followersText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: 'auto', display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
            <Image
              source={{ uri: currentProfile.profilePic }}
              style={{ width: 150, height: 150, borderRadius: 100, marginLeft: 'auto', marginRight: 50 }}
            />
            {currentProfile.verified ? (
              <Icons name='verified' size={20} color="green" style={styles.icon} />
            ) : (
              <Iconsss name='unverified' size={20} color="red" style={styles.icon} />
            )}
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.name}>{currentProfile.name}</Text>
            <Text style={styles.role}>{currentProfile.profession}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Iconss name='location' size={30} color="red" />
              <Text>{currentProfile.location}</Text>
            </View>
            <Text style={styles.description}>{currentProfile.description}</Text>
            <Text style={styles.hashtags}>{currentProfile.hashtags}</Text>
          </View>
        </View>
        <View style={styles.feedGrid}>
          {currentProfile.Posts.map((post, index) => (
            <TouchableOpacity key={index}   onPress={() => navigation.navigate('Posts', { imageUri: item })} >
              <Image source={{ uri: post }} style={styles.feedItem} />
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
  },
  tabs: {
    backgroundColor: '#383838',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    backgroundColor: 'transparent',
    width: '40%', 
    alignSelf: 'flex-start',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  icon: {
    position: 'absolute',
    right: 50, 
    bottom: -2, 
  },
  profileTextContainer: {
    marginRight: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  role: {
    fontSize: 18,
    color: '#fff',
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: '#fff',
    textAlign: 'left',
  },
  hashtags: {
    fontSize: 14,
    marginTop: 5,
    color: '#fff',
  },
  feedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  feedItem: {
    width: 120,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
});

export default Profile;
