
export default function Hook(date) {

   function calcTime() {
      
      function unixTimeConverter(UNIX_timestamp){
         let date = new Date(UNIX_timestamp * 1000);
         return date;
      }

      let date_1 = new Date();
      let date_2 = unixTimeConverter(date);
      let difference = date_1.getTime() - date_2.getTime();
      let totalminute = Math.floor(difference / (1000 * 60));
      
      if (totalminute>=60*24) return Math.floor(totalminute/60*24) +" days ago"
      if (totalminute>=60) return Math.floor(totalminute/60) +" hours ago"
      if (totalminute<60) return Math.floor(totalminute) +" minutes ago"

   }

   return calcTime();

}