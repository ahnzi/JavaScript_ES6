// const settings = {
//     notifications: {
//         follow: true, // 누군가 유저를 follow 하면 notification 을 보낸다고 가정한다.
//         alert: true, // 최근 소식이 있으면 알림을 보내주는 용도로 사용한다고 가정한다.
//         unfollow: false, // 누군가 언팔로우 했을 때는 알림을 받고 싶지 않다고 가정한다.
//     }
// }

const settings = {
    notification: {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        theme: "dark",
    }
};

const {
    notification: { follow },
    color // color 도 가져오고 싶을 때
} = settings;