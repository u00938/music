import { Link, useRouteMatch } from "react-router-dom";
import musics from "../../Dummy.json";

// import musicDesc from "./musicDesc.js";
import styles from "./Music.module.css";

export default function musicList() {
  // let match = useRouteMatch();

  return (
    <div className={styles.container}>
      {Array.isArray(musics.musics)
        ? musics.musics.map((music) => (
            <div key={music.id} className={styles.poster}>
              <div className={styles.row}>
                <div>{music.track}</div>
                <div>{music.album}</div>
              </div>
              <div>artist: {music.artist}</div>
              {/* <Link to={`${match.url}/${music.id}`} className={styles.posterInbox}>
                <musicDesc music={music} />
              </Link> */}
            </div>
          ))
        : ""}
    </div>
  );
}