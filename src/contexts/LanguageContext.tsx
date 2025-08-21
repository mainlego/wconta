import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.becomePartner': 'Become Partner',
    'nav.contact': 'Contact',
    'nav.returnPowerbank': 'Return Powerbank',
    
    // Hero section
    'hero.title': 'Rent a powerbank and stay',
    'hero.titleHighlight': 'W KONTAKCIE!',
    'hero.subtitle': 'Never worry about running out of battery again',
    'hero.cta': 'Find Stations',
    
    // Find us section
    'findUs.title': 'Find us all over the city and charge on the go!',
    'findUs.description': 'Our stations are located throughout Krakow',
    
    // How it works
    'howItWorks.title': 'How do we work?',
    'howItWorks.subtitle': 'rent a powerbank even when your phone is dead',
    'howItWorks.description': 'You can stop worrying about running out of charge on your phone. With our stations throughout the city, you can always stay in touch. You can pay for powerbank rental by tapping your card to the payment terminal at the station even without installing the app.',
    'howItWorks.cta': 'Learn more about how we work',
    
    'howItWorks.step1.title': 'Find our station',
    'howItWorks.step1.description': 'Our stations can be found in many places such as shopping centers and cafes.',
    'howItWorks.step2.title': 'Rent powerbank',
    'howItWorks.step2.description': 'Pay for powerbank rental in any convenient way! Whether it\'s a card or BLIK. We don\'t charge money right away, but just freeze it on the account.',
    'howItWorks.step3.title': 'Install the app',
    'howItWorks.step3.description': 'After charging your phone, install our app and select a point on the map where you want to return the powerbank.',
    'howItWorks.step4.title': 'Return powerbank',
    'howItWorks.step4.description': 'Just come to the nearest station and return the powerbank. You don\'t need to do anything else!',
    
    // Where to find
    'whereToFind.title': 'Where to find us?',
    'whereToFind.description': 'Our stations are located throughout Krakow for your convenience',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How much does it cost to rent a powerbank?',
    'faq.a1': 'The cost is 4 PLN for each of the first two hours, then 6 PLN for the next 22 hours. After that, next 24 hours costs 14 PLN. There is no deposit, but 200 PLN will be temporarily held on your card. This hold will be released as soon as you return the powerbank, and only the rental fee will be charged. If you don\'t return the powerbank within 48 hours, you can keep it, and the full 200 PLN will be charged to your card.',
    'faq.q2': 'How to use?',
    'faq.a2': 'To rent a powerbank, just tap your card and pay for the powerbank rental even when your phone is dead! Yes, you can rent a powerbank even without the app. Money will be charged from your card as soon as you return the powerbank. To return the powerbank, install our app and choose a convenient location from the map.',
    'faq.q3': 'Where to find charging stations?',
    'faq.a3': 'To choose a convenient location for renting a powerbank, install our app. It presents a complete list of our locations and shows where there are charged powerbanks.',
    'faq.q4': 'What cables are included?',
    'faq.a4': 'Type-C, micro-USB, Lightning for iPhone. Connect any cable — they are built into the charger.',
    'faq.q5': 'How safe is the powerbank?',
    'faq.a5': 'Completely safe. Our chargers are manufactured in compliance with all international standards, with Apple certification and EAC countries.',
    'faq.q6': 'How to return powerbank to the machine?',
    'faq.a6': 'Choose a station in the app and go to it. Make sure the wire is hidden in the charger. The charger needs to be inserted with the wires side inward. Make sure the charger is inserted all the way: carefully pull it towards you. If it doesn\'t come out of the cell, then everything worked out.',
    
    // Partners
    'partners.title': 'Want to attract new customers and get an additional source of income?',
    'partners.cta': 'Become a partner!',
    'partners.mainTitle': 'We will install the station for free and take care of all expenses!',
    'partners.benefit1.title': 'New service for your customers',
    'partners.benefit1.description': 'Place the station in a prominent place and tell visitors about it.',
    'partners.benefit2.title': 'New audience',
    'partners.benefit2.description': 'People renting powerbanks often choose to have a snack or buy something at the place where they took the powerbank. 8 out of 10 customers say this.',
    'partners.benefit3.title': 'New profit',
    'partners.benefit3.description': 'On average, a station pays for itself in six months. Check statistics in your personal account — payments, income and expenses.',
    
    // Station types
    'stations.mini.title': 'Mini Stations',
    'stations.mini.description': 'Suitable for to-go format places — for example, small cafes. They are easy to move from place to place.',
    'stations.standard.title': 'Standard Stations',
    'stations.standard.description': 'These are the machines installed in most establishments. Reason: visual appeal and ease of operation.',
    'stations.max.title': 'Max Stations',
    'stations.max.description': 'The largest ones — they can hold dozens of powerbanks. Perfect for high-traffic places — shopping centers, train stations, airports and fast food.',
    
    // Contact
    'contact.title': 'Contact & Support',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    
    // Form
    'form.city': 'City from list',
    'form.customCity': 'City if not in list',
    'form.name': 'Name',
    'form.phone': 'Phone number',
    'form.email': 'Email',
    'form.request': 'Request',
    'form.submit': 'Submit',
    
    // Return powerbank
    'returnPowerbank.title': 'Want to return powerbank? Install our app!',
    'returnPowerbank.appStore': 'Download on App Store',
    'returnPowerbank.googlePlay': 'Get it on Google Play',
    'Отправка...': 'Sending...',
    'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.': 'Application sent successfully! We will contact you soon.',
    'Ошибка отправки. Попробуйте еще раз или свяжитесь с нами напрямую.': 'Sending error. Please try again or contact us directly.',
    
    // Common
    'downloadApp': 'Download App',
    'learnMore': 'Learn More',
    'pricing': '4 zł / hour',
    'pricingDescription': 'Same price anywhere in the city'
  },
  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.howItWorks': 'Jak działamy',
    'nav.becomePartner': 'Zostań partnerem',
    'nav.contact': 'Kontakt',
    'nav.returnPowerbank': 'Zwróć powerbank',
    
    // Hero section
    'hero.title': 'Wypożycz powerbank i zostań',
    'hero.titleHighlight': 'W KONTAKCIE!',
    'hero.subtitle': 'Nigdy więcej nie martw się o rozładowany telefon',
    'hero.cta': 'Znajdź stacje',
    
    // Find us section
    'findUs.title': 'Szukaj nas w całym mieście i ładuj się w podróży!',
    'findUs.description': 'Nasze stacje znajdują się w całym Krakowie',
    
    // How it works
    'howItWorks.title': 'Jak działamy?',
    'howItWorks.subtitle': 'wypożycz powerbank nawet gdy telefon jest na zero',
    'howItWorks.description': 'Możesz już nie martwić się, że zabraknie Ci baterii w telefonie. Dzięki naszym stacjom w całym mieście zawsze będziesz mógł pozostać w kontakcie. Opłacić wypożyczenie powerbanku można przykładając kartę do terminala płatniczego na stacji nawet bez instalowania aplikacji.',
    'howItWorks.cta': 'Dowiedz się więcej o tym jak działamy',
    
    'howItWorks.step1.title': 'Znajdź naszą stację',
    'howItWorks.step1.description': 'Nasze stacje można znaleźć w wielu miejscach, takich jak centra handlowe i kawiarnie.',
    'howItWorks.step2.title': 'Wypożycz powerbank',
    'howItWorks.step2.description': 'Opłać wypożyczenie powerbanku w dowolny wygodny sposób! Czy to kartą czy BLIK. Nie pobieramy pieniędzy od razu, tylko je zamrażamy na koncie.',
    'howItWorks.step3.title': 'Zainstaluj aplikację',
    'howItWorks.step3.description': 'Po naładowaniu telefonu zainstaluj naszą aplikację i wybierz na mapie punkt, gdzie chcesz zwrócić powerbank.',
    'howItWorks.step4.title': 'Zwróć powerbank',
    'howItWorks.step4.description': 'Po prostu przyjdź do najbliższej stacji i zwróć powerbank. Nic więcej nie musisz robić!',
    
    // Where to find
    'whereToFind.title': 'Gdzie nas znaleźć?',
    'whereToFind.description': 'Nasze stacje znajdują się w całym Krakowie dla Twojej wygody',
    
    // FAQ
    'faq.title': 'Często zadawane pytania',
    'faq.q1': 'Ile kosztuje wypożyczenie powerbanku?',
    'faq.a1': 'Cena wynosi 4 PLN za każdą z pierwszych dwóch godzin, następnie 6 PLN za kolejne 22 godziny. Następna doba kosztuje 14 PLN. Nie ma kaucji, ale 200 PLN zostanie tymczasowo zablokowane na Twojej karcie. Kwota ta zostanie odblokowana, gdy tylko zwrócisz powerbank, a z karty zostanie pobrana jedynie opłata za wypożyczenie. Jeśli nie zwrócisz powerbanka w ciągu 48 godzin, możesz go zatrzymać, a z karty zostanie pobrana pełna kwota 200 PLN.',
    'faq.q2': 'Jak korzystać?',
    'faq.a2': 'Aby wypożyczyć powerbank, po prostu przyłóż kartę i opłać wypożyczenie powerbanku nawet gdy masz rozładowany telefon! Tak, tak, można wziąć powerbank nawet bez aplikacji. Pieniądze zostaną pobrane z karty jak tylko zwrócisz powerbank. A żeby oddać powerbank, zainstaluj naszą aplikację i wybierz wygodną lokalizację z mapy.',
    'faq.q3': 'Gdzie znaleźć stacje ładowania?',
    'faq.a3': 'Aby wybrać wygodną lokalizację do wypożyczenia powerbanku, zainstaluj naszą aplikację. Tam przedstawiona jest pełna lista naszych lokalizacji i pokazane jest, gdzie są naładowane powerbanki.',
    'faq.q4': 'Jakie kable są w zestawie?',
    'faq.a4': 'Type-C, micro-USB, Lightning dla iPhone. Podłącz dowolny kabel — są wbudowane w ładowarkę.',
    'faq.q5': 'Na ile bezpieczny jest powerbank?',
    'faq.a5': 'Całkowicie bezpieczny. Nasze ładowarki są produkowane zgodnie ze wszystkimi międzynarodowymi normami, z certyfikacją Apple i krajów EAC.',
    'faq.q6': 'Jak zwrócić powerbank do automatu?',
    'faq.a6': 'Wybierz stację w aplikacji i idź do niej. Upewnij się, że przewód jest schowany w ładowarce. Ładowarkę należy włożyć stroną z przewodami do środka. Upewnij się, że ładowarka jest włożona do końca: ostrożnie pociągnij ją w swoją stronę. Jeśli nie wychodzi z komórki, znaczy, że wszystko się udało.',
    
    // Partners
    'partners.title': 'Chcesz przyciągnąć nowych klientów i otrzymać dodatkowe źródło dochodu?',
    'partners.cta': 'Zostań partnerem!',
    'partners.mainTitle': 'Postawimy stację bezpłatnie i weźmiemy na siebie wszystkie wydatki!',
    'partners.benefit1.title': 'Nowa usługa dla Twoich klientów',
    'partners.benefit1.description': 'Postaw stację w widocznym miejscu i opowiedz o niej odwiedzającym.',
    'partners.benefit2.title': 'Nowa publiczność',
    'partners.benefit2.description': 'Wypożyczający powerbank często wybierają przekąskę lub kupują coś w miejscu, gdzie wzięli powerbank. Mówi o tym 8 na 10 klientów.',
    'partners.benefit3.title': 'Nowy zysk',
    'partners.benefit3.description': 'Średnio stacja zwraca się w pół roku. Sprawdzaj statystyki w panelu osobistym — płatności, dochody i wydatki.',
    
    // Station types
    'stations.mini.title': 'Stacje Mini',
    'stations.mini.description': 'Nadają się do miejsc w formacie to go — na przykład małych kawiarni. Łatwo je przesuwać z miejsca na miejsce.',
    'stations.standard.title': 'Stacje Standard',
    'stations.standard.description': 'To właśnie te automaty są zainstalowane w większości miejsc. Powód: atrakcyjność wizualna i łatwość obsługi.',
    'stations.max.title': 'Stacje Maks',
    'stations.max.description': 'Największe — mieszczą dziesiątki powerbanków. Idealnie nadają się do miejsc o wysokim natężeniu ruchu — centrów handlowych, dworca, lotnisk i fast foodów.',
    
    // Contact
    'contact.title': 'Kontakt i wsparcie',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    
    // Form
    'form.city': 'Miasto z listy',
    'form.customCity': 'Miasto jeśli nie ma na liście',
    'form.name': 'Imię',
    'form.phone': 'Numer telefonu',
    'form.email': 'Email',
    'form.request': 'Zapytanie',
    'form.submit': 'Wyślij',
    
    // Return powerbank
    'returnPowerbank.title': 'Chcesz zwrócić powerbank? Zainstaluj naszą aplikację!',
    'returnPowerbank.appStore': 'Pobierz z App Store',
    'returnPowerbank.googlePlay': 'Pobierz z Google Play',
    
    // Common
    'downloadApp': 'Pobierz aplikację',
    'learnMore': 'Dowiedz się więcej',
    'pricing': '4 zł / godz',
    'pricingDescription': 'Ta sama cena w każdym miejscu miasta',
    
    // Additional translations for complete coverage
    'Active Stations': 'Aktywne stacje',
    'Availability': 'Dostępność',
    'Starting Price': 'Cena początkowa',
    'What are the benefits?': 'Jakie są korzyści?',
    'Choose the station you want to install:': 'Wybierz stację, którą chcesz zainstalować:',
    'Partner Application Form': 'Formularz aplikacji partnera',
    'Select city...': 'Wybierz miasto...',
    'Detailed Process': 'Szczegółowy proces',
    'Pricing': 'Cennik',
    '24/7 Access': 'Dostęp 24/7',
    'Available throughout Krakow at all times': 'Dostępne w całym Krakowie przez całą dobę',
    'Need immediate help?': 'Potrzebujesz natychmiastowej pomocy?',
    'Chat with our support team on WhatsApp for instant assistance': 'Porozmawiaj z naszym zespołem wsparcia na WhatsApp, aby uzyskać natychmiastową pomoc',
    'Chat on WhatsApp': 'Czat na WhatsApp',
    'How to return your powerbank': 'Jak zwrócić powerbank',
    'Choose a station in the app': 'Wybierz stację w aplikacji',
    'Use our app to find the nearest available station and navigate to it.': 'Użyj naszej aplikacji, aby znaleźć najbliższą dostępną stację i do niej dotrzeć.',
    'Prepare the powerbank': 'Przygotuj powerbank',
    'Make sure the wire is hidden inside the powerbank.': 'Upewnij się, że przewód jest schowany w powerbanku.',
    'Insert the powerbank': 'Włóż powerbank',
    'Insert the powerbank with the wire side facing inward until it clicks.': 'Włóż powerbank stroną z przewodem do środka, aż usłyszysz kliknięcie.',
    'Confirm return': 'Potwierdź zwrot',
    'Check the app for a successful return message and payment confirmation.': 'Sprawdź w aplikacji wiadomość o pomyślnym zwrocie i potwierdzenie płatności.',
    'No app required for rental': 'Nie potrzeba aplikacji do wypożyczenia',
    'Multiple cable types included': 'Wiele typów kabli w zestawie',
    'Payment Methods': 'Metody płatności',
    'Front View': 'Widok z przodu',
    'Modern powerbank rental station': 'Nowoczesna stacja wypożyczania powerbanków',
    'Side View': 'Widok z boku',
    'Compact design for any location': 'Kompaktowy design do każdego miejsca',
    'Detail View': 'Widok szczegółowy',
    'Easy-to-use interface': 'Łatwy w użyciu interfejs',
    'Show Less': 'Pokaż mniej',
    'View All Stations': 'Zobacz wszystkie stacje',
    
    // Additional missing translations
    'What are the benefits?': 'Jakie są korzyści?',
    'Choose the station you want to install:': 'Wybierz stację, którą chcesz zainstalować:',
    'Partner Application Form': 'Formularz aplikacji partnera',
    'Select city...': 'Wybierz miasto...',
    'Detailed Process': 'Szczegółowy proces',
    'Pricing': 'Cennik',
    '24/7 Access': 'Dostęp 24/7',
    'Available throughout Krakow at all times': 'Dostępne w całym Krakowie przez całą dobę',
    'Need immediate help?': 'Potrzebujesz natychmiastowej pomocy?',
    'Chat with our support team on WhatsApp for instant assistance': 'Porozmawiaj z naszym zespołem wsparcia na WhatsApp, aby uzyskać natychmiastową pomoc',
    'Chat on WhatsApp': 'Czat na WhatsApp',
    'How to return your powerbank': 'Jak zwrócić powerbank',
    'Choose a station in the app': 'Wybierz stację w aplikacji',
    'Use our app to find the nearest available station and navigate to it.': 'Użyj naszej aplikacji, aby znaleźć najbliższą dostępną stację i do niej dotrzeć.',
    'Prepare the powerbank': 'Przygotuj powerbank',
    'Make sure the wire is hidden inside the powerbank.': 'Upewnij się, że przewód jest schowany w powerbanku.',
    'Insert the powerbank': 'Włóż powerbank',
    'Insert the powerbank with the wire side facing inward until it clicks.': 'Włóż powerbank stroną z przewodem do środka, aż usłyszysz kliknięcie.',
    'Confirm return': 'Potwierdź zwrot',
    'Check the app for a successful return message and payment confirmation.': 'Sprawdź w aplikacji wiadomość o pomyślnym zwrocie i potwierdzenie płatności.',
    'No app required for rental': 'Nie potrzeba aplikacji do wypożyczenia',
    'Multiple cable types included': 'Wiele typów kabli w zestawie',
    'Payment Methods': 'Metody płatności',
    'Front View': 'Widok z przodu',
    'Modern powerbank rental station': 'Nowoczesna stacja wypożyczania powerbanków',
    'Side View': 'Widok z boku',
    'Compact design for any location': 'Kompaktowy design do każdego miejsca',
    'Detail View': 'Widok szczegółowy',
    'Easy-to-use interface': 'Łatwy w użyciu interfejs',
    'Show Less': 'Pokaż mniej',
    'View All Stations': 'Zobacz wszystkie stacje',
    'Availability': 'Dostępność',
    'Отправка...': 'Wysyłanie...',
    'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.': 'Aplikacja została pomyślnie wysłana! Skontaktujemy się z Tobą wkrótce.',
    'Ошибка отправки. Попробуйте еще раз или свяжитесь с нами напрямую.': 'Błąd wysyłania. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.',
    
    // Homepage specific translations
    'Find us all over the city and charge on the go!': 'Znajdź nas w całym mieście i ładuj się w podróży!',
    'Our stations are located throughout Krakow': 'Nasze stacje znajdują się w całym Krakowie',
    'No app required for rental': 'Nie potrzeba aplikacji do wypożyczenia',
    'Multiple cable types included': 'Wiele typów kabli w zestawie',
    'Payment Methods': 'Metody płatności',
    'Same price anywhere in the city': 'Ta sama cena w każdym miejscu miasta',
    'Where to find us?': 'Gdzie nas znaleźć?',
    'Our stations are located throughout Krakow for your convenience': 'Nasze stacje znajdują się w całym Krakowie dla Twojej wygody',
    'Active Stations': 'Aktywne stacje',
    'Starting Price': 'Cena początkowa'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    const translation = translations[language][key];
    if (translation) {
      return translation;
    }
    
    // Fallback to English if translation doesn't exist
    const englishTranslation = translations['en'][key];
    if (englishTranslation) {
      return englishTranslation;
    }
    
    // Return the key itself if no translation found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};