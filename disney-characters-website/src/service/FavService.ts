export default class FavService {

  onFavClick(event: any, char: any) {
    if (event.target.classList.contains("fa-regular")) {
      //on add click
      this.addFav(event, char._id, char.name);
    } else if (event.target.classList.contains("fa-solid")) {
      //on remove click
      this.removeFav(event, char._id, char.name);
    }
  }

  addFav(event: any, charId: number, charName: string) {
    let favArr = JSON.parse(localStorage["favChars"]);
    event.target.classList.remove("fa-regular");
    event.target.classList.add("fa-solid");
    if (!this.inLocalStorage(charId)) {
      favArr.push(charId);
      this.addLocalStorage(favArr);
    }
  }

  removeFav(event: any, charId: number, charName: string) {
    let favArr = JSON.parse(localStorage["favChars"]);
    event.target.classList.remove("fa-solid");
    event.target.classList.add("fa-regular");
    if (this.inLocalStorage(charId)) {
      favArr.splice(favArr.indexOf(charId), 1);
      this.addLocalStorage(favArr);
    }
  }

  inLocalStorage(elem: number) {
    if (localStorage["favChars"] === undefined)
      localStorage["favChars"] = JSON.stringify([]);
    if (JSON.parse(localStorage["favChars"]).includes(elem)) return true;
    return false;
  }

  addLocalStorage(favChars: string[]) {
    localStorage.setItem("favChars", JSON.stringify(favChars));
  }
}
