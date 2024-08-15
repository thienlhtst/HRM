using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Enums
{
    public enum language
    {
        [Description("ENGLISH")]
        en,

        [Description("VIETNAM")]
        vn
    }

    public enum KindSystem
    {
        [Description("LAYOUT")]
        Layout,

        [Description("GROUP")]
        Group,

        [Description("LABEL")]
        Label,

        [Description("INPUT")]
        Input
    }

    public enum KindInput
    {
        [Description("TEXT")]
        Text,

        [Description("PASSWORD")]
        Password,

        [Description("EMAIL")]
        Email,

        [Description("SELECT")]
        Select,

        [Description("CHECKBOX")]
        Checkbox,

        [Description("MUTLISELECT")]
        MutliSelect
    }
}