using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Ez.Snackbar.RNEzSnackbar
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNEzSnackbarModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNEzSnackbarModule"/>.
        /// </summary>
        internal RNEzSnackbarModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNEzSnackbar";
            }
        }
    }
}
