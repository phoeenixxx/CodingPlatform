import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "modules": "Modules", "materials": "Materials", "presentations": "Presentations", "videos": "Videos", "recordings": "Recordings", "tasks": "Assignments", "help": "Help", "instructions": "Instructions", "flashcards": "Flashcards & Quizzes", "about_program": "About Program",
      "modules_title": "Course Modules", "materials_title": "Study Materials", "presentations_title": "Presentations", "recordings_title": "Lecture Recordings", "tasks_title": "Assignments", "help_title": "Support",
      "no_content": "Content not uploaded yet", "back": "Back", "send": "Send", "loading": "Sending...", "success": "Success!", "name_label": "Full Name", "email_label": "Email", "link_label": "Link (GitHub/Drive)", "task_desc": "Task Condition:", "help_placeholder": "How can we help?", "help_send": "Send Message", "task_prefix": "Assignment", "close": "Close",
      "m1_title": "Web Page Markup and Styling",
      "m1_lo1": "Building web page structure", "m1_lo2": "Reflecting objects and links on a web page", "m1_lo3": "Reflecting forms on a web page", "m1_lo4": "Styling web page elements using styles", "m1_lo5": "Adapting web page interface for different devices", "m1_lo6": "Designing web page interface using design tools",
      "m2_title": "Web Page Styling Using Sass/scss Preprocessor and Tailwind Framework",
      "m2_lo1": "Styling web page components with Sass/scss capabilities", "m2_lo2": "Building web page layout using Tailwind", "m2_lo3": "Styling web page objects using Tailwind",
      "m3_title": "Creating Web Page Interactivity and Effects Using JavaScript",
      "m3_lo1": "Solving simple tasks using basic JavaScript elements", 
      "m3_lo2": "Solving tasks using basic constructions", 
      "m3_lo3": "Working with arrays and objects", "m3_lo4": "Using browser interaction functions", "m3_lo5": "Performing DOM manipulations", "m3_lo6": "Interacting with APIs using asynchronous programming (fetch)",
      "m3_lo1_p1": "Presentation 1 (JS Fundamentals)", "m3_lo1_p2": "Presentation 2 (JS Tasks)", "m3_lo1_m1": "JS Basic Elements - Main Material", "m3_lo1_m2": "JS Basic Elements - Extra Material",
      "m4_title": "Creating a Dynamic Web Page Using TypeScript",
      "m4_lo1": "Configuring TypeScript", "m4_lo2": "Solving simple tasks using basic TypeScript elements", "m4_lo3": "Data processing using types and interfaces", "m4_lo4": "Solving tasks using OOP (Object-Oriented Programming)",
      "m5_title": "Developing Web Page Interactivity and Effects Using React",
      "m5_lo1": "Creating a project using the React library", "m5_lo2": "Solving assigned tasks using React Hooks", "m5_lo3": "Component composition and property management", "m5_lo4": "Setting up SPA (Single Page Application) using react-router", "m5_lo5": "State management", "m5_lo6": "Form control and validation using Formik",
      "m6_title": "Web Page Optimization",
      "m6_lo1": "Web page performance optimization", "m6_lo2": "Debugging program code", "m6_lo3": "Web page application compatibility (Cross-browser / Cross-platform)",
      "m7_title": "Version Control Using Git Technology",
      "m7_lo1": "Basics of code version control", "m7_lo2": "Version control for team projects", "m7_lo3": "Resolving code version conflicts",
      "m8_title": "Professional English for Front-end Development",
      "m8_lo1": "Finding material related to professional issues", "m8_lo2": "Getting familiar with professional material", "m8_lo3": "Translating professional material",
      "m9_title": "Practical Project",
      "m9_lo1": "Independently planning professional tasks", "m9_lo2": "Independently executing professional tasks", "m9_lo3": "Reporting executed tasks",
      "m10_title": "Using Artificial Intelligence",
      "m10_lo1": "Introduction to AI basics and applications", "m10_lo2": "Practical use of AI tools",
      "inst_compiler_title": "Online Compiler - Code Testing",
      "inst_compiler_desc": "Use an online compiler for quick testing of JavaScript code.",
      "inst_compiler_steps": [
        "Go to website: Open Programiz Online Compiler using the provided link.",
        "Write Code: Type your JavaScript code in the left panel (Editor).",
        "Run Button: Click the blue 'Run' button to execute the code.",
        "View Result: The output of your code will appear in the right black panel (Output).",
        "Clear: Use the 'Clear' button to reset the console for a new task."
      ],
      "inst_github_title": "GitHub - Project Initialization",
      "inst_github_desc": "Control versions and save code in the cloud.",
      "inst_github_steps": [
        "Preparation: Register on github.com and create a 'New Repository'.",
        "Initialization: Open terminal in VS Code and type 'git init'.",
        "Staging: Use 'git add .' to prepare files for upload.",
        "Commit: Save local changes using 'git commit -m \"initial commit\"'.",
        "Remote: Link your repository: 'git remote add origin [URL]'.",
        "Push: Upload code to the server: 'git push -u origin master'."
      ],
      "inst_pages_title": "GitHub Pages - Live Link",
      "inst_pages_desc": "Turn your code into a live website via settings.",
      "inst_pages_steps": [
        "Settings: Go to your repository and click 'Settings'.",
        "Pages: Select 'Pages' from the left sidebar.",
        "Branch: Choose 'master' or 'main' branch and click 'Save'.",
        "Wait: Wait 1-2 minutes for the site to build.",
        "Visibility: In 'About' section, check 'Use your GitHub Pages website'."
      ],
      "inst_meet_title": "Google Meet - Connection Guide",
      "inst_meet_desc": "How to join the lecture using the provided link.",
      "inst_meet_steps": [
        "Link: Use the official link provided by the instructor.",
        "Auth: Ensure you are logged into your Google account.",
        "Access: Grant microphone and camera permissions.",
        "Mute: Turn off your microphone before joining.",
        "Join: Click 'Ask to join' and wait for confirmation."
      ]
    }
  },
  ka: {
    translation: {
      "modules": "მოდულები", "materials": "მასალები", "presentations": "პრეზენტაციები", "videos": "ვიდეოები", "recordings": "ჩანაწერები", "tasks": "დავალებები", "help": "დახმარება", "instructions": "ინსტრუქციები", "flashcards": "ფლეშქარდები და ქვიზები", "about_program": "პროგრამის შესახებ",
      "modules_title": "სასწავლო მოდულები", "materials_title": "სასწავლო მასალები", "presentations_title": "პრეზენტაციები", "recordings_title": "ლექციების ჩანაწერები", "tasks_title": "დავალებები", "help_title": "დახმარება",
      "no_content": "ჯერ არ არის ატვირთული", "back": "უკან", "send": "გაგზავნა", "loading": "იგზავნება...", "success": "წარმატებით გაიგზავნა!", "name_label": "სახელი და გვარი", "email_label": "ელ-ფოსტა", "link_label": "ბმული (GitHub/Drive)", "task_desc": "დავალების პირობა:", "help_placeholder": "როგორ დაგეხმაროთ?", "help_send": "გაგზავნა", "task_prefix": "დავალება", "close": "დახურვა",
      "m1_title": "ვებ გვერდის მარკირება და სტილებით გაფორმება",
      "m1_lo1": "ვებ გვერდის სტრუქტურის აგება", "m1_lo2": "ვებ გვერდზე ობიექტების და ბმულების ასახვა", "m1_lo3": "ვებ გვერდზე ფორმების ასახვა", "m1_lo4": "ვებგვერდის ელემენტების გაფორმება სტილების საშუალებით", "m1_lo5": "ვებგვერდის ინტერფეისის მორგება სხვადასხვა მოწყობილობებზე", "m1_lo6": "ვებგვერდის ინტერფეისის გაფორმება დიზაინის ხელსაწყოს საშუალებით",
      "m2_title": "ვებ გვერდის სტილიზაცია Sass/scss პრე პროცესორის და Tailwind ფრეიმვორკის გამოყენებით",
      "m2_lo1": "ვებგვერდის კომპონენტების გაფორმება Sass/scss პრე პროცესორის შესაძლებლობებით", "m2_lo2": "ვებგვერდის მაკეტის აგება Tailwind-ის საშუალებით", "m2_lo3": "ვებგვერდის ობიექტების გაფორმება Tailwind-ის საშუალებით",
      "m3_title": "ვებგვერდის ინტერაქტიულობისა და ეფექტების შექმნა JavaScript-ის საშუალებით",
      "m3_lo1": "მარტივი ამოცანის გადაწყვეტა JavaScript ენის ძირითადი ელემენტების გამოყენებით", 
      "m3_lo2": "ამოცანის გადაჭრა ძირითადი კონსტრუქციების გამოყენებით", 
      "m3_lo3": "მასივებთან და ობიექტთან მუშაობა", "m3_lo4": "ბრაუზერთან სამუშაო ფუნქციების გამოყენება", "m3_lo5": "DOM მანიპულაციების შესრულება", "m3_lo6": "API-თან ურთიერთქმედება ასინქრონული პროგრამირების გამოყენებით (fetch)",
      "m3_lo1_p1": "პრეზენტაცია 1 (JS საფუძვლები)", "m3_lo1_p2": "პრეზენტაცია 2 (JS ამოცანები)", "m3_lo1_m1": "JS ძირითადი ელემენტები - ძირითადი მასალა", "m3_lo1_m2": "JS ძირითადი ელემენტები - დამატებითი მასალა",
      "m4_title": "დინამიური ვებგვერდის შექმნა typescript-ის საშუალებით",
      "m4_lo1": "typescript-ის კონფიგურირება", "m4_lo2": "მარტივი ამოცანის გადაწყვეტა typescript-ის ენის ძირითადი ელემების გამოყენებით", "m4_lo3": "მონაცემების დამუშავება types და interface-ის გამოყენებით", "m4_lo4": "ამოცანის გადაჭრა OOP-ის (ობიექტზე ორიენტირებული პროგრამირების) საშუალებით",
      "m5_title": "ვებგვერდის ინტერაქტიულობისა და ეფექტების შემუშავება React-ის საშუალებით",
      "m5_lo1": "პროექტის შექმნა React ბიბლიოთეკის გამოყენებით", "m5_lo2": "დასმული ამოცანის გადაწყვეტა React Hooks-ის გამოყენებით", "m5_lo3": "კომპონენტების კომპოზიცია და მათი თვისებების მართვა", "m5_lo4": "SPA-ს (Single Page Application) გამართვა react-router-ის გამოყენებით", "m5_lo5": "ინფორმაციის მენეჯმენტი (state management)", "m5_lo6": "ფორმის კონტროლი და ვალიდაცია Formik-ს გამოყენებით",
      "m6_title": "ვებ გვერდის ოპტიმიზაცია",
      "m6_lo1": "ვებგვერდის წარმადობის ოპტიმიზაცია", "m6_lo2": "პროგრამული კოდის გამართვა (Debugging)", "m6_lo3": "ვებგვერდის აპლიკაციის თავსებადობა (Cross-browser / Cross-platform)",
      "m7_title": "ვერსიების კონტროლი Git ტექნოლოგიის გამოყენებით",
      "m7_lo1": "კოდის ვერსიის კონტროლის საფუძვლები", "m7_lo2": "გუნდური პროექტის ვერსიის კონტროლი", "m7_lo3": "კოდის ვერსიის კონფლიქტების მოგვარება",
      "m8_title": "დარგობრივი ინგლისური ენა Front-end დეველოპმენტისთვის",
      "m8_lo1": "პროფესიულ საკითხებთან დაკავშირებული მასალის მოძიება", "m8_lo2": "პროფესიულ საკითხებთან დაკავშირებული მასალის გაცნობა", "m8_lo3": "პროფესიულ საკითხებთან დაკავშირებული მასალის თარგმნა",
      "m9_title": "პრაქტიკული პროექტი",
      "m9_lo1": "პროფესიული ამოცანის დამოუკიდებლად დაგეგმვა", "m9_lo2": "პროფესიული ამოცანის დამოუკიდებლად შესრულება", "m9_lo3": "შესრულებული ამოცანების ანგარიშგება",
      "m10_title": "ხელოვნური ინტელექტის გამოყენება",
      "m10_lo1": "ხელოვნური ინტელექტის საფუძვლებისა და აპლიკაციების გაცნობა", "m10_lo2": "ხელოვნური ინტელექტის ხელსაწყოების პრაქტიკული გამოყენება",
      "inst_compiler_title": "Online Compiler - კოდის ტესტირება",
      "inst_compiler_desc": "გამოიყენეთ ონლაინ კომპილატორი JavaScript კოდის სწრაფი ტესტირებისთვის.",
      "inst_compiler_steps": [
        "საიტზე გადასვლა: გახსენით Programiz-ის ონლაინ კომპილატორი მოწოდებული ბმულით.",
        "კოდის ჩაწერა: მარცხენა პანელში (Editor) ჩაწერეთ თქვენი JavaScript კოდი.",
        "Run ღილაკი: დააჭირეთ ლურჯ 'Run' ღილაკს კოდის შესასრულებლად.",
        "შედეგის ნახვა: მარჯვენა შავ პანელში (Output) გამოჩნდება თქვენი კოდის მუშაობის შედეგი.",
        "გასუფთავება: 'Clear' ღილაკით შეგიძლიათ გაასუფთაოთ კონსოლი ახალი ამოცანისთვის."
      ],
      "inst_github_title": "GitHub - პროექტის ინიციალიზაცია",
      "inst_github_desc": "აკონტროლეთ ვერსიები და შეინახეთ კოდი ღრუბელში.",
      "inst_github_steps": [
        "მომზადება: github.com-ზე რეგისტრაცია და 'New Repository'-ს შექმნა.",
        "ინიციალიზაცია: ტერმინალში ბრძანება 'git init'.",
        "სტეიჯინგი: 'git add .' ფაილების მოსამზადებლად.",
        "კომიტი: 'git commit -m \"initial commit\"' ცვლილებების შესანახად.",
        "დაკავშირება: რეპოზიტორის ბმულის მითითება: 'git remote add origin [URL]'.",
        "ატვირთვა: კოდის გაგზავნა სერვერზე: 'git push -u origin master'."
      ],
      "inst_pages_title": "GitHub Pages - საიტის გაშვება",
      "inst_pages_desc": "აქციეთ კოდი მომუშავე საიტად პარამეტრებიდან.",
      "inst_pages_steps": [
        "პარამეტრები: გადადით 'Settings' მენიუში.",
        "გვერდები: მარცხენა პანელში აირჩიეთ 'Pages'.",
        "შტო: აირჩიეთ 'master' ან 'main' შტო და დააჭირეთ 'Save'.",
        "ლოდინი: დაელოდეთ 1-2 წუთი საიტის აწყობას.",
        "ხილვადობა: 'About' სექციაში მონიშნეთ 'Use your GitHub Pages website'."
      ],
      "inst_meet_title": "Google Meet - შეერთების ინსტრუქცია",
      "inst_meet_desc": "როგორ შემოვიდეთ ლექციაზე მოწოდებული ბმულით.",
      "inst_meet_steps": [
        "ბმული: გამოიყენეთ ლექტორის მიერ მოწოდებული ოფიციალური ბმული.",
        "ავტორიზაცია: დარწმუნდით, რომ Google ანგარიშში შესული ხართ.",
        "წვდომა: სისტემას მიეცით მიკროფონზე და კამერაზე წვდომა.",
        "დამალვა: შემოსვლამდე გამორთეთ მიკროფონი.",
        "შეერთება: დააჭირეთ 'Ask to join' და დაელოდეთ დადასტურებას."
      ]
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ka",
    fallbackLng: "ka",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;