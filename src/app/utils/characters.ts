export interface Character {
  id: string;
  name: string;
  title: string;
  image: string;
  deathYear?: string;
  birthYear?: string;
  series: string;
  description: string;
  cause?: string;
  tags: string[];
  featured?: boolean;
}

// 示例VTuber数据
export const characters: Character[] = [
  {
    id: 'minato-aqua',
    name: '湊あくあ',
    title: 'hololive 2期生',
    image: '/minato-aqua.png', // 确保这个路径是正确的
    birthYear: '12月1日',
    deathYear: '虚拟悼念',
    series: 'hololive',
    description: '湊あくあ是hololive二期生，自称是来自海底的女子高中生。她是一位热衷于游戏和歌唱的VTuber，以天然呆的性格和时不时的笨拙举动深受粉丝喜爱。她的游戏实况、歌唱和日常直播为观众带来了无数欢笑与感动。在赛博灵堂中，我们永远铭记这位可爱的"巫女"虚拟偶像，愿她在数字世界中永远闪耀。',
    cause: '虚拟悼念（实际活跃中）',
    tags: ['hololive', '游戏', '歌唱'],
    featured: true
  },
  {
    id: 'kiryu-coco',
    name: '桐生ココ',
    title: 'hololive 4期生',
    image: '/file.svg', // 临时使用现有图标
    birthYear: '6月17日',
    deathYear: '2021年7月1日',
    series: 'hololive',
    description: '桐生ココ是hololive四期生，自称为来自异世界的龙娘。她以直率的性格和创新的内容（如早晨的AsaCoco直播和reddit内容评论）在VTuber界获得了巨大影响力。她于2021年7月1日正式毕业，离开了hololive。',
    cause: '毕业',
    tags: ['hololive', '毕业', '龙'],
    featured: true
  },
  {
    id: 'rushia',
    name: '潤羽るしあ',
    title: 'hololive 3期生',
    image: '/window.svg', // 临时使用现有图标
    birthYear: '1月15日',
    deathYear: '2022年2月24日',
    series: 'hololive',
    description: '潤羽るしあ是hololive三期生，设定为一位能唤醒亡者的夜之族巫女。她以甜美的声音和激动时的尖叫而闻名，拥有大量忠实粉丝。2022年2月24日，因合同违约问题，她与hololive解约。',
    cause: '合同解约',
    tags: ['hololive', '毕业', '巫女'],
    featured: true
  },
  {
    id: 'aloe',
    name: '魔乃アロエ',
    title: 'hololive 5期生',
    image: '/next.svg', // 临时使用现有图标
    deathYear: '2020年8月31日',
    series: 'hololive',
    description: '魔乃アロエ是hololive五期生，仅出道两周就宣布了毕业。虽然活动时间极短，但她仍在粉丝心中留下了深刻印象。作为一个短暂燃烧的星光，她的故事成为了VTuber界的一段伤感回忆。',
    cause: '毕业',
    tags: ['hololive', '毕业', '短暂'],
    featured: false
  },
  {
    id: 'coco-kaine',
    name: 'ココ・キーヌ',
    title: 'AsaCoco药物形象代言人',
    image: '/vercel.svg', // 临时使用现有图标
    deathYear: '2021年7月1日',
    series: 'hololive周边',
    description: 'ココ・キーヌ是桐生ココ创造的虚构人物，作为AsaCoco系列产品的代言人出现。她的形象是一位打扮暴露的金发女性，常在AsaCoco直播中以各种滑稽的方式出现。随着桐生ココ的毕业，ココ・キーヌ也一同消失在了历史中。',
    cause: '创造者毕业',
    tags: ['hololive', '周边', '虚构'],
    featured: false
  },
  {
    id: 'hitomi-chris',
    name: '日富美クリス',
    title: 'hololive 1期生',
    image: '/globe.svg', // 临时使用现有图标
    deathYear: '2018年',
    series: 'hololive',
    description: '日富美クリス是hololive一期生，但在正式出道前就因为各种原因而被解约。她成为了hololive历史上最神秘的存在之一，关于她的信息极其有限，几乎没有留下任何活动痕迹，是一位真正意义上在VTuber世界"消逝"的角色。',
    cause: '未正式出道即解约',
    tags: ['hololive', '神秘', '解约'],
    featured: false
  }
];

export function getFeaturedCharacters(): Character[] {
  return characters.filter(char => char.featured);
}

export function getAllCharacters(): Character[] {
  return characters;
}

export function getCharacterById(id: string): Character | undefined {
  return characters.find(char => char.id === id);
}

export function getCharactersByTag(tag: string): Character[] {
  return characters.filter(char => char.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  characters.forEach(char => {
    char.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
} 