# Plant Dad Depot webshop!

This was a project we did as an assignment in Basic Javascript, but I remade it with ReactTS. It is basically only the frontend part of a webshop.

![Screenshot 2023-11-16 at 19 07 38](https://github.com/Mikael-Ronnberg/Yet-Another-Webshop/assets/113439687/f2ba26e7-d1e8-43d2-a9de-890276fd77b9)

![Screenshot 2023-11-16 at 19 08 43](https://github.com/Mikael-Ronnberg/Yet-Another-Webshop/assets/113439687/b81cb3c3-a0e6-446d-ac6d-e531d6a8ba09)

## Features

As we never did the Backend for the webshop assignment, all the products are mock-products saved as an array in /mock/product.ts. The shoppingcart is also saved locally on localstorage. For state management, I'm using reducers and context if values are not directly shared with an component, which then uses normal props.
All the images are AI generated using Midjourney, except for the hero-banner, which is from Pexel.

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra UI](https://chakra-ui.com/)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-project.git
```

2. Install dependencies:

```bash
npm install
```

3. Start project locally:

```bash
npm run dev
```

4. Have fun!

## The Projects Future

My plan is to change the styling, since I'm not completely satisfied with the results, however, the hardest part is always getting your yown images to use.
I'm also going to implement a Backend part, maybe wiht Supabase.
