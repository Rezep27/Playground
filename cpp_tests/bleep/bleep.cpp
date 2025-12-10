#include <iostream>
#include <string>

bool bleep_word(std::string word){
  if (word == "Broccoli"){
    return true;
  }
  return false;
}

int main(){
  for (std::string word; std::cin >> word;){
    if (bleep_word(word)){
      std::cout << "Bleep\n";
    }
    else{
      std::cout << word << '\n';
    }
  }
  return 0;
}
