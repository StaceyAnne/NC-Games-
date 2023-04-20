export const formatDate = (dateString) => {
   
        const date = new Date(dateString);
        const newDate = date.toString().split("GMT");
        const formattedDate = newDate[0];
        return formattedDate; 
        
}