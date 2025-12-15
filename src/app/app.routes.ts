import { Routes } from '@angular/router';

// 1. 新しい配置場所から SignIn をインポート
import { SignIn } from './components/sign-in/sign-in';

// 2. routes 配列に設定を追加
export const routes: Routes = [
  // '/sign-in' というURLでアクセスされたら SignInComponent を表示する
  { path: 'sign-in', component: SignIn },

  // アプリケーションのルートURL ('/') でアクセスされたら '/sign-in' にリダイレクトする
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
];
