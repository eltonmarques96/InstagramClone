import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import optionsIcon from "../../../assets/options.png";
import likeIcon from "../../../assets/like.png";
import commentIcon from "../../../assets/comment.png";
import sendIcon from "../../../assets/send.png";
import saveIcon from "../../../assets/save.png";

// import { Container } from './styles';

const post = [
  {
    id: 1,
    author: "Elton Marques",
    place: "Salvador-Bahia",
    pictureURL:
      "https://www.correio24horas.com.br/fileadmin/user_upload/correio24horas/2019/10/04/salvador_div.jpg",
    likesCount: 22,
    description: "Salvador, a primeira capital do Brasil",
    hastags: "#salvador #bahia #brasil #faroldaBarra"
  },
  {
    id: 2,
    author: "Elton Marques",
    place: "Salvador-Bahia",
    pictureURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Largo_do_Pelourinho_-_Salvador.JPG/300px-Largo_do_Pelourinho_-_Salvador.JPG",
    likesCount: 1212,
    description: "Salvador, a primeira capital do Brasil",
    hastags: "#salvador #bahia #brasil #Pelourinho"
  },
  {
    id: 3,
    author: "Elton Marques",
    place: "Salvador-Bahia",
    pictureURL:
      "https://img.theculturetrip.com/768x432/wp-content/uploads/2017/02/16240752320_68b3863c5d_k.jpg",
    likesCount: 122122,
    description: "Salvador, a primeira capital do Brasil",
    hastags: "#salvador #bahia #brasil #rioVermelho"
  },
  {
    id: 4,
    author: "Elton Marques",
    place: "Salvador-Bahia",
    pictureURL:
      "https://s2.glbimg.com/5nITaq78HsgjU6KcDEvMAzmdfV4=/0x0:3549x2366/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/b/1/O7ySdWQ9q5iICVI2Kmkw/20-02-2018-lugares-visitar-verao-fot-bruno-concha-secom-pms-8.jpg",
    likesCount: 212121,
    description: "Salvador, a primeira capital do Brasil",
    hastags: "#salvador #bahia #brasil #elevadorLacerda"
  }
];

function renderItem({ item: post }) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.place}>{post.place}</Text>
        </View>
        <View style={styles.postOption}>
          <TouchableOpacity>
            <Image source={optionsIcon}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          style={styles.pictureURL}
          source={{ uri: post.pictureURL }}
        ></Image>
      </View>
      <View style={styles.footer}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.action}>
              <Image source={likeIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Image source={commentIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Image source={sendIcon}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.rightActions}>
            <TouchableOpacity style={styles.action}>
              <Image source={saveIcon}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.likes}>{post.likesCount} likes</Text>
          <Text style={styles.description}>{post.description}</Text>
          <Text style={styles.hastags}>{post.hastags}</Text>
        </View>
      </View>
    </View>
  );
}

export default function Feed() {
  return (
    <View>
      <FlatList
        data={post}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 12
  },
  header: {
    flexDirection: `row`,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 15
  },
  userInfo: {},
  author: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold"
  },
  place: {
    fontSize: 15,
    color: "#666"
  },
  postOption: {},
  pictureURL: {
    width: "100%",
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    paddingVertical: 15,
    flexDirection: `row`,
    justifyContent: "space-between"
  },
  leftActions: {
    flexDirection: `row`
  },
  rightActions: {
    flexDirection: `row`
  },
  action: {
    marginRight: 8
  },
  likes: {
    fontWeight: "bold",
    fontSize: 12
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    color: "#000000"
  },
  hastags: {
    color: "#002D5E"
  }
});
