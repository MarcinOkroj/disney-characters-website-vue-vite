import { useToast } from "primevue/usetoast";

export default class FavService {
  //   favArr: any[] = [];

  toast = useToast();

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
      //   this.toastr.success('has been added to favourites', charName);
      this.toast.add({
        severity: "success",
        summary: "PrimeVue",
        detail: "Welcome to PrimeVue + Create Vue",
        life: 3000,
      });
    }
  }

  removeFav(event: any, charId: number, charName: string) {
    let favArr = JSON.parse(localStorage["favChars"]);
    event.target.classList.remove("fa-solid");
    event.target.classList.add("fa-regular");
    if (this.inLocalStorage(charId)) {
      favArr.splice(favArr.indexOf(charId), 1);
      this.addLocalStorage(favArr);
      //   this.toastr.warning('has been removed from favourites', charName);
      this.toast.add({
        severity: "success",
        summary: "PrimeVue",
        detail: "Welcome to PrimeVue + Create Vue",
        life: 3000,
      });
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
