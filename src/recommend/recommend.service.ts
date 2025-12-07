import { Injectable } from '@nestjs/common';

@Injectable()
export class RecommendService {
  private ingredients = [
    { name: '살리실산', skinTypes: ['oily'], concerns: ['acne'] },
    { name: '나이아신아마이드', skinTypes: ['oily', 'combination'], concerns: ['acne', 'brightening'] },
    { name: '히알루론산', skinTypes: ['dry'], concerns: ['wrinkle', 'dryness'] },
    { name: '세라마이드', skinTypes: ['dry', 'sensitive'], concerns: ['dryness'] },
    { name: '센텔라아시아티카', skinTypes: ['sensitive'], concerns: ['redness'] },
  ];

  private products = [
    {
      name: '더랩바이블랑두 살리실산 토너',
      brand: 'The Lab',
      ingredients: ['살리실산'],
    },
    {
      name: '이니스프리 비자 트러블 스킨',
      brand: 'Innisfree',
      ingredients: ['살리실산', '나이아신아마이드'],
    },
    {
      name: '라로슈포제 시카플라스트 밤',
      brand: 'La Roche-Posay',
      ingredients: ['센텔라아시아티카', '세라마이드'],
    },
    {
      name: '닥터지 레드 블레미쉬 수딩크림',
      brand: 'Dr.G',
      ingredients: ['센텔라아시아티카'],
    },
    {
      name: '더마토리 하이포알레제닉 모이스처 크림',
      brand: 'Derma Theory',
      ingredients: ['히알루론산', '세라마이드'],
    },
  ];

  recommend(skinType: string, concerns: string[]) {
    const recommendedIngredients = this.ingredients
      .filter(
        (ing) =>
          ing.skinTypes.includes(skinType) &&
          ing.concerns.some((c) => concerns.includes(c)),
      )
      .map((ing) => ing.name);

    const recommendedProducts = this.products.filter((prod) =>
      prod.ingredients.some((i) => recommendedIngredients.includes(i)),
    );

    return {
      skinType,
      concerns,
      recommendedIngredients,
      recommendedProducts,
    };
  }
}
