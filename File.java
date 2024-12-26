import java.util.Set;
import java.util.HashSet;
public class File {
    public  static int lengthOfLongestSubstring(String s) {
        int left =0;
        int maxLength =0;
        Set<Character> unique = new HashSet<>();
        for(int i=0; i<s.length(); i++){
            while(unique.contains(s.charAt(i))){
                unique.remove(s.charAt(left));
                left++;
            }
            unique.add(s.charAt(i));
            maxLength = Math.max(maxLength, i-left+1);
        }
        System.out.println(unique);
        System.out.println(maxLength);
        return maxLength;
    }
    public static void main(String args[]){
      System.out.println(lengthOfLongestSubstring("pwwkew"));
    }
}