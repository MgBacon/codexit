Why is this so fucking difficult  
All I want to do is link an external library in UE4  
Now on day two  
Of wrestling with this stupid build system  
*There isn't even anything in the library*  
It's a single function that returns 23  
**23**  
I thought to myself  
Oh UE4 would be great  
It's C++ so I can *statically link* my library  
Instead of Unity which has to do it as two DLLs  
But no  
I've worked on ancient proprietary AAA engines that supported this *braindead trivial* use case better  
With zero documentation  
Jesus christ  
```
#pragma once

#include <cstdint>

int32_t test_lib();
#include "lib.h"

int32_t test_lib()
{
    return 23;
}
```
Just that  
Literally that  
In a .lib  
Linked into a UE4 project  
And I'm pulling my hair out  
Configuration mismatches (even though the settings are exactly the same)  
Version mismatches (even though they're built under the exact same compiler)  
Getting the build C# file to even recognize the file, or import the headers  
What the actual fuck  
And the only guide is this: https://wiki.unrealengine.com/Linking_Static_Libraries_Using_The_Build_System  
Which omits so many details it's like that "rest of the fucking owl" drawing  
*What's in your library Bob? Where's the code? Where's the example?*  
Oh here's another good one.  
https://cdn.discordapp.com/attachments/197871632738549760/570476874430545930/unknown.png  
So 4.22 supports C++17 now, right?  
So I could use my library, right?  
Of course not!  
I set the target to Cpp17  
I build  
And what do I see?  
https://cdn.discordapp.com/attachments/197871632738549760/570477104404103170/unknown.png  
Fucking kill me.  
What in the world  
Is it even reading this file?  
```
// Fill out your copyright notice in the Description page of Project Settings.
using UnrealBuildTool;
using System.Collections.Generic;

public class UE4MagicTarget : TargetRules
{
    public UE4MagicTarget(TargetInfo Target) : base(Target)
    {
        Type = TargetType.Game;

        ExtraModuleNames.AddRange( new string[] { "UE4Magic" } );

        //CppStandard = CppStandardVersion.Cpp17;

        CppStandard = CppStandardVersion.HelloWhyDoesThisCompile;
        ar%e y0u ev*en enum parsing void this?

        PCHUsage = PCHUsageMode.NoSharedPCHs;
    }
}
```
COMPILES FINE  
OKAY  
Seems good to me!  
Excuse me while I slowly dissolve into insanity  
https://cdn.discordapp.com/attachments/197871632738549760/570481446095945728/unknown.png  
:wakemeup: