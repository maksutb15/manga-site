import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-manga-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './manga-detail.html',
  styleUrls: ['./manga-detail.css']
})
export class MangaDetail {

  manga: any;

 mangas = [

{ id:1, title:'Naruto', slug:'naruto' , country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Adventure','Comedy','Martial Arts'], image:'assets/manga/naruto.jpg', rating:9.1,
   description:`Twelve years ago, 
  a powerful Nine-Tailed Fox Demon attacked the Konoha ninja village. 
  The demon was quickly defeated and sealed into an infant named Naruto Uzumaki. 
  But for this, Konoha's main ninja, the fourth hokage, had to sacrifice his life... Now, 
  after 12 years, Naruto is the number one among the ninja jerks who is determined 
  to become the next Hokage and gain the recognition of everyone who ever doubted him!` },

{ id:2, title:'One Piece', slug:'onepiece' , country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Adventure','Fantasy','Comedy'], image:'assets/manga/onepiece.jpg', rating:9.8, 
  description:`Gold Roger— the pirate king, who has achieved wealth, 
  fame and power in his lifetime, 
  has hidden somewhere in the vastness of this world a mysterious treasure that everyone calls "One Piece".
   After Roger's death, many brave souls rushed in search of this big prize. And the great age of pirates has arrived!
So a boy named Luffy, who lives in a small coastal village, dreams of becoming a pirate. Even as a child, 
he inadvertently ate a rubber-rubber fruit and acquired incredible abilities. Having matured, 
he leaves his native land in pursuit of the greatest treasure!` },

{ id:3, title:'Bleach',slug:'bleach',  country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Fantasy','Supernatural'], image:'assets/manga/bleach.jpg', rating:8.9, 
  description:`Ichigo Kurosaki has been able to see ghosts and spirits of the dead since childhood.
   He's fifteen now, living in modern Japan and studying in high school.
One unremarkable day, a girl, Rukia Kuchiki, suddenly appears in his bedroom.
 She is a shinigami and is very surprised that Ichigo can not only see her, but also, unheard of,
  touch her. The showdown that had begun is interrupted by the appearance of an Empty One, the one that Rukia came for. 
  The battle with the Empty turns out badly: forced to defend Ichigo, Rukia is seriously injured. To save Ichigo, 
  she gives him some of her own abilities, but to her surprise, Ichigo absorbs all of her energy and becomes a shinigami himself. 
  Leaving Rukia exhausted and almost helpless, Ichigo easily defeats the Empty One.` },

{ id:4, title:'Attack on Titan',slug:'aot', country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Drama','Horror','Mystery'], image:'assets/manga/aot.jpg', rating:9.7, 
  description:`The human world has fallen under the crushing power of the Titans. 
  Sacrificing their freedom, humanity took refuge in high-walled cities, hoping to protect the survivors. 
  But one terrible day, a colossal Titan appeared, surpassing even the size of the city walls. And the fragile hope crumbled to dust. 
  The desperate battle for survival has begun again` },

{ id:5, title:'Death Note', slug:'deathnote' , country:'Japan', type:'Manga', demographic:'Shonen', genres:['Psychological','Mystery','Thriller'], image:'assets/manga/deathnote.jpg', rating:9.4, 
  description:`Light Yagami is an elite student who discovers a mysterious notebook dropped by a death god. 
  Anyone whose name is written inside the notebook dies. Believing he can cleanse the world of evil,
   Light begins judging criminals as the unknown killer called Kira. But his plans are challenged by the brilliant detective L, 
   leading to a deadly battle of intelligence.` },

{ id:6, title:'Chainsaw Man', slug:'chainsawman' ,country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Horror','Comedy'], image:'assets/manga/chainsawman.jpg', rating:8.8, 
  description:`Denji lives in poverty, burdened by his father's debts and forced to hunt devils for survival. 
  After being betrayed and killed, he merges with his loyal devil companion Pochita and is reborn as Chainsaw Man.
   With chainsaws erupting from his body, 
  Denji enters a violent world of devil hunters, danger, and twisted desires while chasing a simple dream of happiness.` },

{ id:7, title:'Jujutsu Kaisen', slug:'jujutsu' , country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','School','Supernatural'], image:'assets/manga/jujutsu.jpg', rating:9.0,
   description:`Yuji Itadori is an ordinary student with incredible physical ability, until he swallows a cursed object to save his friends. 
   He becomes the vessel of Ryomen Sukuna, the King of Curses. 
   To control this threat, Yuji joins Tokyo Jujutsu High, where sorcerers battle terrifying curses born from human fear and hatred.` },

{ id:8, title:'Demon Slayer', country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Historical','Demons'], image:'assets/manga/demonslayer.jpg', rating:9.2,
   description:`After returning home, Tanjiro Kamado finds his family slaughtered by demons, with only his sister Nezuko surviving transformed into one of them.
    Determined to turn her back into a human, Tanjiro joins the Demon Slayer Corps.
    Armed with skill, courage, and compassion, he begins a dangerous journey against terrifying enemies.` },

{ id:9, title:'Tokyo Ghoul',slug:'demonslayer', country:'Japan', type:'Manga', demographic:'Seinen', genres:['Action','Horror','Psychological'], image:'assets/manga/tokyoghoul.jpg', rating:8.9, 
  description:`Ken Kaneki's normal life ends after a deadly encounter with a ghoul. Following emergency surgery, 
  he becomes a half-ghoul who must survive by consuming human flesh. 
  Trapped between the human world and the ghoul world, Kaneki struggles with identity, cruelty, and what it truly means to be human.` },

{ id:10, title:'Black Clover', slug:'blackclover', country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Fantasy','Magic'], image:'assets/manga/blackclover.jpg', rating:8.7, 
  description:`In a kingdom ruled by magic, Asta is born without any magical power at all. While others look down on him,
   he refuses to give up on his dream of becoming the Wizard King.
   After gaining a rare anti-magic grimoire, Asta begins his rise through battles, friendship, and endless determination.` },

{ id:11, title:'Dragon Ball', slug:'dragonball', country:'Japan', type:'Manga', demographic:'Kodomo', genres:['Action','Adventure','Comedy'], image:'assets/manga/dragonball.jpg', rating:9.3, 
  description:`Son Goku is a cheerful boy with incredible strength who lives alone in the mountains.
   His peaceful life changes when he meets Bulma, who is searching for the magical Dragon Balls. 
  Together they begin a legendary adventure filled with martial arts battles, powerful rivals, and journeys that shape the world.` },

{ id:12, title:'Hunter x Hunter', slug:'hunterxhunter',country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Adventure','Fantasy'], image:'assets/manga/hxh.jpg', rating:9.5, 
  description:`Gon Freecss leaves his island home after learning that his father is alive and one of the world's greatest Hunters. Determined to find him, 
  Gon takes the dangerous Hunter Exam and meets loyal friends and deadly enemies. 
  His journey leads into battles, mysteries, and the darker side of the world.` },

{ id:13, title:'Boruto',slug:'boruto', country:'Japan', type:'Manga', demographic:'Shonen', genres:['Action','Adventure','Sci-Fi'], image:'assets/manga/boruto.jpg', rating:8.2, 
  description:`Boruto Uzumaki is the son of Naruto, the Seventh Hokage. Unlike his father, 
  Boruto resents the responsibilities of being Hokage and wants to make his own path. 
  As a new generation of ninja rises, Boruto faces advanced technology, hidden threats, 
  and the challenge of stepping out of his father's shadow.` },

{ id:14, title:'Solo Leveling', slug:'sololeveling',country:'Korea', type:'Manhwa', demographic:'Shonen', genres:['Action','Fantasy','Dungeon'], image:'assets/manga/solo.jpg', rating:9.6, 
  description:`In a world where hunters fight monsters inside mysterious gates, 
  Sung Jinwoo is known as the weakest hunter alive. After surviving a deadly dungeon, 
  he gains a mysterious system that allows him to level up endlessly. As his power grows, 
  hidden secrets about the gates and the world begin to unfold.` },

{ id:15, title:'Lookism',slug:'lookism', country:'Korea', type:'Manhwa', demographic:'Seinen', genres:['Drama','School','Action'], image:'assets/manga/lookism.jpg', rating:8.8, 
  description:`Daniel Park is constantly bullied because of his appearance and weak body. One day, 
  he mysteriously wakes up in a second body that is tall, handsome, and perfect. Living two completely different lives, 
  Daniel discovers how unfairly society judges people based on looks while facing school violence, gangs, and personal growth.` },

{ id:16, title:'The Boxer',slug:'theboxer', country:'Korea', type:'Manhwa', demographic:'Seinen', genres:['Sports','Drama','Psychological'], image:'assets/manga/boxer.jpg', rating:9.0, 
  description:`Yu is a quiet and emotionless young man with extraordinary talent for boxing. Noticing his potential,
   a legendary trainer brings him into the brutal world of professional fighting. 
  As Yu crushes opponents with terrifying ease, the story explores trauma, loneliness, ambition, and the meaning of victory.` },

{ id:17, title:'Omniscient Reader',slug:'omniscientreader', country:'Korea', type:'Manhwa', demographic:'Shonen', genres:['Action','Fantasy','Apocalypse'], image:'assets/manga/orv.jpg', rating:9.4, 
  description:`Kim Dokja is an ordinary office worker whose favorite web novel suddenly becomes reality. 
  The world transforms into deadly scenarios where only the strongest can survive. 
  As the only reader who knows how the story ends, Dokja uses his knowledge to challenge fate, build alliances, and save humanity from destruction.` },

{ id:18, title:'Tower of God', slug:'towerofgod',country:'Korea', type:'Manhwa', demographic:'Shonen', genres:['Action','Fantasy','Adventure'], image:'assets/manga/tog.jpg', rating:9.1, 
  description:`Twenty-Fifth Bam has lived alone in darkness until meeting Rachel, the only person who ever meant anything to him. 
  When she enters the mysterious Tower, 
  Bam follows her inside. Each floor holds deadly tests, powerful enemies, 
  and secrets that challenge friendship, loyalty, and ambition.` },

{ id:19, title:'Wind Breaker',slug:'windbreaker', country:'Korea', type:'Manhwa', demographic:'Shonen', genres:['Sports','School','Drama'], image:'assets/manga/windbreaker.jpg', rating:8.8, 
  description:`Jay Jo is a model student with top grades, but he secretly loves cycling more than anything else.
   After joining a street bike crew,
   he enters the thrilling world of racing, friendship, and fierce competition.
    Through every race, Jay learns passion, teamwork, and what it means to truly live.` },

{ id:20, title:'Nano Machine', slug:'nanomachine',country:'Korea', type:'Manhwa', demographic:'Seinen', genres:['Action','Martial Arts','Fantasy'], image:'assets/manga/nano.jpg', rating:9.0, 
  description:`Cheon Yeo-Woon is an outcast prince of the Demonic Cult who is constantly targeted by enemies.
   His life changes when a descendant from the future injects him with advanced nano technology. 
  With new power and intelligence, he begins his ruthless rise through the martial arts world.` },

{ id:21, title:'Eleceed',slug:'eleceed', country:'Korea', type:'Manhwa', demographic:'Shonen', genres:['Action','Comedy','Superpower'], image:'assets/manga/eleceed.jpg', rating:8.9, 
  description:`Jiwoo Seo is a kind-hearted boy with incredible speed who hides his powers from the world.
   His life changes when he rescues an injured stray cat that is actually Kayden,
   one of the strongest awakened beings alive.
    Together they face dangerous organizations, powerful enemies, and unexpected friendships.` },

{ id:22, title:'Martial Peak', slug:'martialpeak',country:'China', type:'Manhua', demographic:'Shonen', genres:['Action','Fantasy','Martial Arts'], image:'assets/manga/martialpeak.jpg', rating:8.8, 
  description:`Yang Kai is a lowly trial disciple with little talent and no status.
   Refusing to surrender to fate, he endures endless hardship to walk the path of martial arts.
   Through dangerous trials, hidden treasures, and fierce battles, he rises toward the legendary Martial Peak.`},

{ id:23, title:'Apotheosis',slug:'apotheosis', country:'China', type:'Manhua', demographic:'Shonen', genres:['Fantasy','Action','Cultivation'], image:'assets/manga/apotheosis.jpg', rating:8.7, 
  description:`Luo Zheng was once the young master of a noble family, but after disaster strikes, he is reduced to slavery. 
  Inside his body lies a mysterious power capable of changing destiny itself.
   With determination and strength, he begins a journey from humiliation to godhood.` },

{ id:24, title:'Tales of Demons and Gods', slug:'talesofdemonsandgods',country:'China', type:'Manhua', demographic:'Shonen', genres:['Fantasy','Action','Reincarnation'], image:'assets/manga/tales.jpg', rating:8.7, 
  description:`Nie Li was once the strongest demon spiritualist, but he dies during humanity's final battle. 
  He is reborn into his younger body with all memories intact. 
  Given a second chance, Nie Li uses his future knowledge to protect his city, 
  save his loved ones, and change destiny itself.` },

{ id:25, title:'Versatile Mage',slug:'versatilemage', country:'China', type:'Manhua', demographic:'Shonen', genres:['Magic','School','Action'], image:'assets/manga/mage.jpg', rating:8.5, 
  description:`Mo Fan awakens in a parallel world where magic has replaced science.
   Though born poor and underestimated, he discovers he possesses two rare magic elements instead of one.
   With talent, courage, and determination, he rises against monsters, rivals, and powerful enemies.` },

{ id:26, title:'Soul Land', slug:'soulland',country:'China', type:'Manhua', demographic:'Shonen', genres:['Fantasy','Adventure','Romance'], image:'assets/manga/soulland.jpg', rating:8.8, 
  description:`After sacrificing himself in his previous life, Tang San is reborn in a world where everyone possesses spirit powers.
   Using both ancient knowledge and natural talent, he trains to become stronger. Alongside trusted companions, he begins a legendary path filled with love,
    friendship, and battle.` },

{ id:27, title:'Berserk', slug:'berserk',country:'Japan', type:'Manga', demographic:'Seinen', genres:['Dark Fantasy','Action','Drama'], image:'assets/manga/berserk.jpg', rating:9.9, 
  description:`Guts is a lone mercenary who has survived war and suffering since childhood. 
  Wielding a massive sword, he walks through a cruel dark world filled with monsters and betrayal.
   Driven by rage and pain, Guts seeks revenge while struggling to keep his humanity alive.` },

{ id:28, title:'Vinland Saga', slug:'vinlandsaga',country:'Japan', type:'Manga', demographic:'Seinen', genres:['Historical','Action','Drama'], image:'assets/manga/vinland.jpg', rating:9.4, 
 description:`During China's brutal Warring States period, a war orphan named Xin dreams of becoming the greatest general under the heavens. 
 Through countless battles, 
 political schemes, and bloodshed, he fights to rise from nothing and help unify the land. 
 Kingdom is an epic tale of war, ambition, and destiny.` },

{ id:29, title:'Kingdom', slug:'kingdom',country:'Japan', type:'Manga', demographic:'Seinen', genres:['War','Historical','Action'], image:'assets/manga/kingdom.jpg', rating:9.3, 
  description:`During China's brutal Warring States period, 
  a war orphan named Xin dreams of becoming the greatest general under the heavens. Through countless battles, 
  political schemes, and bloodshed, he fights to rise from nothing and help unify the land. 
  Kingdom is an epic tale of war, ambition, and destiny.` },

{ id:30, title:'Blue Lock', slug:'bluelock',country:'Japan', type:'Manga', demographic:'Shonen', genres:['Sports','Drama','Competition'], image:'assets/manga/bluelock.jpg', rating:8.9, 
  description:`Japan creates the ultimate football striker.
   According to the story, after the loss of the Japanese national team at the 2018 World Cup,
  a special project "Blue Lock" was developed to "create" a better and selfish striker. To survive in the Blue Prison,
  you need to "walk over the corpses of the others," because departure means the end of your entire football life... 
  Only 1 out of 300 participants will reach the end! This is a manga about selfish football!` }

];

 constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.manga = this.mangas.find(m => m.id === id);

  if (!this.manga) {
    this.manga = this.mangas[0];
  }
}
}