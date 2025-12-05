#include <iostream>

int main(){
  int a = 20000;
  char c = a;
  int b = c;

  if (a != b){
    std::cout << "Oups! " << a << " != " << b << '\n';
  }
  else{
    std::cout << "Wow! We have large characters!\n";
  }
}
