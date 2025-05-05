
# Vacation Apartment Rental – Client Side (React)

This is the **client-side** application for a vacation apartment rental platform, built using **React** and **Redux**. It provides a user-friendly interface for browsing, filtering, and managing apartment listings.

## Features

### User Authentication
- Login and registration for advertisers.

### Apartment Management
- View all apartments with details and images.  
- Filter apartments by criteria like city, category, price, etc.  
- Add new apartments with comprehensive information.  
- Update existing apartment details.  
- Delete apartments.

### Category & City Management
- View all categories and cities.  
- Add new categories and cities.

## Components

### Main Components
- `Main.jsx`: Sets up the Redux provider and React Router.  
- `Nav.jsx`: Provides navigation throughout the application.  
- `Routing.jsx`: Defines the application's routes.

### Apartment Components
- `addApartment.jsx`: Enables adding new apartments.  
- `allApartments.jsx`: Displays all available apartments.  
- `apartmentCard.jsx`: Renders an individual apartment card.  
- `choose_filter.jsx`: Provides filtering options.  
- `getApartments_filter.jsx`: Displays filtered apartments.  
- `updateApartment.jsx`: Allows updating existing apartments.

### Category Components
- `addCategory.jsx`: Enables adding new categories.  
- `allCategory.jsx`: Displays all available categories.  
- `categoryC.jsx`: Renders an individual category.

### City Components
- `addCity.jsx`: Enables adding new cities.  
- `allCity.jsx`: Displays all available cities.  
- `cityCard.jsx`: Renders an individual city.

### Authentication Components
- `logInAdvertiser.jsx`: Handles user login.  
- `registerAdvertiser.jsx`: Handles user registration.

## Technologies Used

- React  
- Redux  
- React Router  
- CSS

## Installation

```bash
# Clone the repository
git clone https://github.com/RuthSchiff/Vacation-apartment-rental---client-side.git

# Navigate to the project directory
cd Vacation-apartment-rental---client-side

# Install dependencies
npm install

# Start the development server
npm start
```

## Usage

Open your browser and visit:  
http://localhost:3000

## Contributing

Contributions are welcome!  
Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

## השכרת דירות נופש (React)

זהו יישום צד לקוח של פלטפורמת השכרת דירות נופש, שנבנה באמצעות React ו־Redux. הוא מספק ממשק נוח לדפדוף, סינון וניהול רישומי דירות.

### תכונות

#### אימות משתמשים
- התחברות והרשמה עבור מפרסמים.

#### ניהול דירות
- הצגת כל הדירות עם פרטים ותמונות.  
- סינון דירות לפי עיר, קטגוריה, מחיר ועוד.  
- הוספת דירות חדשות עם מידע מלא.  
- עדכון פרטי דירות קיימות.  
- מחיקת דירות.

#### ניהול קטגוריות וערים
- הצגת כל הקטגוריות והערים.  
- הוספת קטגוריות וערים חדשות.

### רכיבים

#### רכיבים ראשיים
- `Main.jsx`: מגדיר את Redux ואת React Router.  
- `Nav.jsx`: ניווט בין מסכי היישום.  
- `Routing.jsx`: הגדרת הנתיבים של היישום.

#### רכיבי דירות
- `addApartment.jsx`: הוספת דירות.  
- `allApartments.jsx`: הצגת דירות זמינות.  
- `apartmentCard.jsx`: כרטיס דירה בודדת.  
- `choose_filter.jsx`: אפשרויות סינון.  
- `getApartments_filter.jsx`: הצגת דירות מסוננות.  
- `updateApartment.jsx`: עדכון דירה.

#### רכיבי קטגוריות
- `addCategory.jsx`: הוספת קטגוריה חדשה.  
- `allCategory.jsx`: כל הקטגוריות.  
- `categoryC.jsx`: קטגוריה בודדת.

#### רכיבי ערים
- `addCity.jsx`: הוספת עיר חדשה.  
- `allCity.jsx`: כל הערים.  
- `cityCard.jsx`: עיר בודדת.

#### רכיבי אימות
- `logInAdvertiser.jsx`: התחברות.  
- `registerAdvertiser.jsx`: הרשמה.

### טכנולוגיות בשימוש

- React  
- Redux  
- React Router  
- CSS

### התקנה

```bash
# שכפול המאגר
git clone https://github.com/RuthSchiff/Vacation-apartment-rental---client-side.git

# מעבר לספרייה
cd Vacation-apartment-rental---client-side

# התקנת תלויות
npm install

# הפעלת השרת המקומי
npm start
```

### שימוש

היכנס לכתובת:  
http://localhost:3000
