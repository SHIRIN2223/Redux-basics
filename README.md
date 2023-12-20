# State Yönetimi

-State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özellikleri.

-Prop Drilling: Birleşenlerden yukarıdan aşagıya veri taşıması

-Context Apı: Uygulamadaki statelerin yönetilebildigi state yönetim aracı

-Redux: Birleşenlerin sahip olduğu ve merkezi olarak tutulması gereken statelerin yönetimini sağlar

# Neden Redux 

- Kod tekrarını önler
- Performasını artırır
- Bileşen içerisindeki karışıklıgı azaltır
- Hata ayıklama daha kolaydır
- Orta - Büyük ölçekli uygulamalarda state yönetimini kolaylaştırır

# Reduxla ilgili bilinmesi gereken

1. Store: Uygulamanın bütün bileşenleri tarafından erişebilen ve değiştirebilen merkezi state deposu

2. Reducer: Aksiyondan aldığı talimat ve state ile store'u içerisinde barındırdıgı fonksiyon sayesinde günceleyen yapı

3. Action: Storei güncellemek için reducer'a gönderdigimiz emir/haber

- Action: iki değere sahip bir objedir.
- Type: Action'ın görevini tanımlayan string ifade (ADD_TODO)
- Payload: Gönderilen eylemin verisi (newTodo)

4. Dispatch: Action'un gerçekleştiğini reducer'a haber veren metod
5. Subscribe: Bileşenlerin store'a erişimini tanımlayan terim (useContext / useSelector)
6. Provider: Store'da tutulan verileri uygulamaya sağlar.

# Redux Kullanmak için aşamalar (kurulum)
- " REDUX " ve "react-redux"  paketlerini indir
-reducer/reduceler kurlumunu yap
-store kurulumunu yap
-store'e projeye tanıt

# Altın Kural

- Hem  api hem redux'ın kullanıldığı projelerde
- store'i güncelleme işlemini api istediğiyle bağımlı hale getirmeli
- ancak istek başarılı olursa store'da değişim gercekleşmeli



# Redux-basics
