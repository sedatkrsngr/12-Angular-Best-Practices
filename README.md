# 12-Angular-Best-Practices


Gerekli extensionları indirmek için Vs Code ekranında solda Extensions butonu ile indirme ekranı gelir.

Web Development Essentials Extension Pack(Frontend tarafta gerekli extensionlara sahiptir. Chromeda debug etme,kod yazarken yanda ekranda anlık yansıma vs.
)

Angular 10 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout(Zamanla 11,12,13 olabilir ama bu şekilde adı mesela videoda angular 8'di 10 olmuş)
Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets indiriyoruz
TSlint
Angular Files Eklediğimiz componentleri app.module.ts içerisine otomatik oluşturur

https://angular.io/guide/setup-local sitesinde adımlar yazıyor
1- Node.js yükle 10 ve üzeri olmalı
2-Arama kısmında Node.js command promt tıklayıp node -v diyerek versiyon kontrolü yaparız
3-npm -v diyerek te paket yöneticisinin versiyonunu öüreniyoruz.
4-Angular sitesinde adım adım angular cli kurulumunu anlatır
*npm install -g @angular/cli ile cli yükleris command promt ekranında çalıştır.
-g Global anlamına geliyor, Windowsa kurar. Yani tüm projelerimizde kullanabileceğimiz anlamına geliyor.
-s ile olan var o ise belirli bir proje için yükleme için kullanılır ve sadece berlirttiğimiz o projede kullanılır
*ng --version diyerek Anguların versiyonunu öğreniyoruz
5-TypeScript Paketinin Kurulumu(Angular 2+ itibaren kullanılan dildir. Düz javascript yerine kolaylaştıma adına oluşturulmuş bir dildir. Kodu tarayıcı tarafında
javascripte dönderir.)
*https://www.typescriptlang.org/ sitesine girip donwload-> Via npm kısmından npm ile ilgili siteye gittiğimizda npm install -g typescript şeklinde indiriyormuşuz propt ekranında
--g global anlamında yine aynı
--  tsc -v ile versiyon kontrolü yapılır

Tamamdır herşey kuruldu.

Angular 2+ Proje Oluşturma

Belirlediğimiz bir alana Proje için bir klasör oluşturup ardında vs Code ile open folder diyoruz ardından yukardan new Terminal diyerek işlemlere başlıyoruz.
ng new myappName ile projeyi oluşturup ardından routing ile yes diyip sonra da css seçiyoruz ardından klasörümüz içine bu projemizi oluşturuyor  paketlerle beraber
ardından terminal ekranından cd myappName diyip ng serve -o dersek proje başlatılır ve http://localhost:4200/ adresinde projemiz açılır. 
Eğer tarayıcıyı da açsın istersek ng serve --open  --port 4201 veya ... -o demek yeterli npm start ta ng serve ile aynı portu değiştirmek için de --port kullanılır varsayılan 4200





******************************************************angular cli komutları 
**ng new projectname  //yeni proje oluşturma

**ng g class className  // yeni bir class oluşturma g(generate) 
-eğer spec.ts dosyası oluşmasın istiyorsak sonuna->  --skipTests=true yazmak yeterli. ->  "ng g class className --skipTests=true" Tüm Cli komutları için bu yöntemi kullanabiliriz
-eğer belli bir yerin altında oluşturmak istiyorsak -> "ng g class classes/home  --skipTests=true" -> classes klasörü altına oluşturur. Tüm Cli komutları için bu yöntemi kullanabiliriz

**ng g component componentName // yeni bir component oluşturma

**ng g pipe pipeName // yeni bir pipeoluşturma 
-Pipe:Template tarafında değişkenler için bir dönüşüm işlemi gerçekleştirmek için kullanılır. Örn. Html de uzun gelen tarihi kısa göstermek için burası kullanılır
-para birimleri,tarhi formatları vs gibi işlemlerde arayüz tarafında kullanılır. Kullanımı -> {{deger | mypipe }}

**ng g module moduleName // yeni bir modül oluşturma  
-uygulamayı parçalamak için kullanılır varsayılan app.module burada oluşturulunca sadece module dosyamız oluşur

************genel generate yapılabilecek komutlar(Yukardakiler bir kaç örnek)
app-shell
application
class
component
directive
enum
guard
interceptor
interface
library
module
pipe
resolver
service
service-worker
web-worker
**************

**ng build -> uygulamayı build eder -> typescript tarafını javascripte çevirir

**ng serve -o ->uygulamayı çalıştırır ve tarayıcıyı açar
-farklı bir portta çalıştırmak için ise ng serve -o -p 4201 ->4201 portunda çalıştırır -> varayılan 4200'dür

**sürekli cd dememek için bir kere "cd projectname" dedikten sonra "code ." yazdığımızda artık yeni bir vs code açılır fakat artık o yneisinde terminaller projectname temelli olur


**jquery indirmek için projemiz içinde npm install jquery --save

**bootstrap indirmek için projemiz içinde npm install bootstrap --save

--ardından angular.json->build olan kısımda styles bölümüne bootstrap.min.css
--scripts bölümüne ise jquery.min.js ,bootstrap.min.js ekliyoruz

**angular material eklemek için ise https://material.angular.io/guide/getting-started sitesinde adımlar va. işlemleri tamaladıktan sonra sitedeki angular bileşenleri(Components) ile test edebilirsin
ng add @angular/material ile başlıyor




****************************************************Best Practices
**observable subscribe olunmamış veri demek

**hata gelirse projeyi tekrar başlat ve tekrar devam ederse ng build ile build et

**componentlerde 3 yaşam döngüsü var. Açılır açılmaz constructor, constructordan sonra implements edilen OnInit ve farklı bir componente geçiş yapıldığında çalışan implement edilen onDestroy

**router sayfalarına link vermek için ->  <a routerLink="/home">Anasayfaya Git</a>

**Angular içerisinde fake api kullanmak istiyorsak "https://jsonplaceholder.typicode.com/" sitesinde kullanım örnekleri var

**Angular da constructor iki şey için kullanılmalı. Serviceler ve değişkenimizin ilk değeri için

**angular tarafında *ngfor ile veri listelenirken yeni veri eklendiği zaman normalde html tarafında örn : liste şeklinde gösterince listeyi siler ve yeni eklenenle birlikte yeniden ekler.
bu maliyetli olduğu için "thenBy" methodu kullanırsak bu sorun ortadan kalkacak 
--örn: html tarafında->  <ul><li *ngFor="let user of users; trackBy:trackByUniqe">{{user.name}}</li></ul> //trackByUniqe kendimiz bu ismi verdik. Componentte bu fonk kullanılmalı
--component tarafında-> sınıfın içerisinde trackByUniqe(index,item){return index;}//item nesnemiz, index ise varsayılan 0,1,2.. itemda unique değer varsa onu da kullanabiliriz. örn. return item.id

** uzun uzun dosya yolu yazmak yerine -> tsconfig.json->baseUrl altına->    "paths": {"@app/*":["src/app/*"]}, eklediğimizde örn. Bu  @app gördüğünde srcnin altında app ye bakacak

**Template içerisinde observable nesnelere "async" pipe ile subsribe ol-> neden dersek. Diyelim ki veri çeken bir componentten diğer componente veri gelmeden gidersek. Arkada tarafta veri
halen çekilmeye devam eder, bunu engellemek için kullanırız.
--ngOnInit(): void {this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(delay(5000)).subscribe((data) => {console.log(data);});}
-öncelikle component içerisinde subsribe olmamalıyız. doğru kullanım şu şekildedir. component içerisinde observable nesne üretim buna subscribe olmayan nesneyi atamalı ve htmlde async ile kullanmalıyız
-users:Observable<any[]> ;  ngOnInit(): void { this.users = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(delay(5000)); html -><ul><li *ngFor="let user of users | async">{{user.name}}</li></ul>
-bu kullanımda component değiştiği zaman otomatik unsubscribe olur. 
-pipe(delay(gecikme süresi)) kullanımı için import { delay } from 'rxjs/operators'; kullanılması gerekmektedir.

**Component içerisinde observable nesneler için  "takeUntil" methodunu kullan //normalde  component içerisinde subscribe olmak yukarıdaki sorunlara neden olduğundan kullanılmaz ama component
-içerisinde de bu sorun çözülebiliyor.

-- ngOnDestroy(): void { this.unscribeSubject.next(); this.unscribeSubject.complete();  } users:any[]; unscribeSubject=new Subject(); ngOnInit(): void {this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(delay(5000),takeUntil(this.unscribeSubject)).subscribe((data) => {this.users =data;});}
-import { Observable,Subject } from 'rxjs'; ile Subject() sınıfını barındırır bu yüzden eklemeliyiz take until yine rxjs/operators içerisinde 
--bu şekilde kullanım ile yine componentten componente geçerken işlem bitmeden gidersek işlem durur ve devam etmez


**İç içe subscribe methodları kullanma, RxJS merge operatorlarını kullan
--diyelim ki bir api isteği var  ve ardından gelen bilgilere göre 2. bir api isteği yapıyoruz ama bunu içi içe for döngüsü gibi subcribe ile
-yapıyoruz bu pek sağlıklı değil. örn. 1 nolu yapılacak işin kullanıcısının bilgilerini getirme
--users:any ;  ngOnInit(): void { this.httpClient.get<any>('https://jsonplaceholder.typicode.com/todos/1').pipe(mergeMan(t=>this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/users/${t.userId}`))).subscribe(data=>this.user=data); 
html -><span>{{user | json}}</span> // json dosyasını bu şekilde ekrana yazdırırız


**componentlerin içerisinde presentation logic dışında birşey bulundurma
--api'dan data çekme işlemini component yerine  service ile gerçekleştirmeliyiz,sayfalama,dosya oluşturma gibi business işler component içerisinde olmamalı

**Dosyaları isimlendirirken birden fazla kelime ile oluşuyorsa - ile kelimeleri ayırın

**Environment(Production,Development) ortamları ayırmak için environment değişkeni kullan environtment klasöründe bu iki ortam için ayrı ayrı klasör var. Bu 2 klasörde test ve canlı apileri kullanabiliriz. 
--eğer uygulamayı production ortamında çalıştırma istersek "ng serve -o --prod=true" böylelikle canlı ortamda test edebiliriz. Varsayılan developmenttir. build için de "ng build --prod=true"

**Projelerinde "TsLint" kullan(static kod analiz tooldur. Type script kodunun kalitesini kontrol eder. Lint kullanınca projelerde herkes aynı kodu yazmak zorunda kalır. Kod bütünlüğünü sağlar)
--TSLİnt adlı extension ile kurallara uygun kod yazılır

**Any tipini kullanmaktan kaçın objecte tekabül eder. Bunun yerine modeller oluşturup onlara denk gelen sorgularda kullanmak gerekir

**sabit değişkenler için const dinamik değişkenler için let kullan

**TEmplate içerisinde logic barındırma yani temltae içierisnde ngIf kullanırken component içerisinde değişken oluşturup gelen true false değerini template gönder ve ona göre ngIf kullan. 

**Sayfanın açılış süresini azaltmak için "Lazy-loading feature module" kullan  diyelim sitemizin user ve admin tarafı var. admin tarafını kullanmayacak kullanıcılar daha fazla olduğundan
--admin tarafının componentlerinin başlangıçta yüklenmesi engellenmeli
--ng g module admin --route admin --module app.module burada app.module bağlı ayrı bir admin modulü oluştururouz ve otomatik routing yapısını da oluşturuyoruz yeni modullerde bu şekilde routing
--normal componentlerde manuel routing app-routing.module içierisinde routes:[]; içerisine örn home için routes:[path:"",component:HomeComponent] bu şekilde başlangıçta admin içerisindeki componentler
--admin çağrılmadığı sürece çalışmaz. Böyle yerlerde module yapısı kullanılabilir.
----bu modüle component eklemek için ise ng g c admin/components/role-ekle    components içerisinde role-ekle componenti oluşur
